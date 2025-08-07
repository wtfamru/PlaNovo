import os
from typing import Any, Dict

from dotenv import load_dotenv
from fastapi import HTTPException, Request
from svix import Webhook, WebhookVerificationError
from sqlmodel import Session

from models import Users

# Load environment variables
load_dotenv()

# Get webhook secret from environment
CLERK_WEBHOOK_SECRET = os.getenv("CLERK_WEBHOOK_SECRET")

if not CLERK_WEBHOOK_SECRET:
    raise ValueError(
        "CLERK_WEBHOOK_SECRET environment variable is not set"
    )


def verify_webhook_signature(
    request: Request, payload: bytes
) -> Dict[str, Any]:
    """Verify the webhook signature using svix"""
    try:
        # Get the signature from headers
        svix_id = request.headers.get("svix-id")
        svix_timestamp = request.headers.get("svix-timestamp")
        svix_signature = request.headers.get("svix-signature")

        if not all([svix_id, svix_timestamp, svix_signature]):
            raise HTTPException(
                status_code=400, detail="Missing webhook headers"
            )

        # Create webhook instance
        webhook = Webhook(CLERK_WEBHOOK_SECRET)

        # Verify the signature
        event = webhook.verify(
            payload,
            {
                "svix-id": svix_id,
                "svix-timestamp": svix_timestamp,
                "svix-signature": svix_signature,
            }
        )

        return event.data

    except WebhookVerificationError as e:
        raise HTTPException(
            status_code=400, detail=f"Invalid webhook signature: {str(e)}"
        )
    except Exception as e:
        raise HTTPException(
            status_code=400, detail=f"Webhook verification failed: {str(e)}"
        )


def handle_user_created(
    event_data: Dict[str, Any], session: Session
) -> Dict[str, Any]:
    """Handle user.created event from Clerk"""
    try:
        # Extract user data from the event
        user_data = event_data.get("object", {})

        # Get user ID (this is the Clerk user ID)
        user_id = user_data.get("id")
        if not user_id:
            raise ValueError("User ID not found in webhook payload")

        # Get email addresses
        email_addresses = user_data.get("email_addresses", [])
        primary_email = None
        if email_addresses:
            # Find the primary email address
            for email_data in email_addresses:
                if email_data.get("id") == user_data.get(
                    "primary_email_address_id"
                ):
                    primary_email = email_data.get("email_address")
                    break

            # If no primary email found, use the first one
            if not primary_email and email_addresses:
                primary_email = email_addresses[0].get("email_address")

        if not primary_email:
            raise ValueError("No email address found in webhook payload")

        # Get user profile data
        first_name = user_data.get("first_name")
        last_name = user_data.get("last_name")

        # Get avatar URL
        image_url = user_data.get("image_url")

        # Check if user already exists
        existing_user = session.get(Users, user_id)
        if existing_user:
            # Update existing user
            existing_user.email = primary_email
            existing_user.first_name = first_name
            existing_user.last_name = last_name
            existing_user.avatar_url = image_url
            session.commit()
            return {"status": "updated", "user_id": user_id}

        # Create new user
        new_user = Users(
            id=user_id,
            email=primary_email,
            first_name=first_name,
            last_name=last_name,
            avatar_url=image_url
        )

        session.add(new_user)
        session.commit()

        return {"status": "created", "user_id": user_id}

    except Exception as e:
        session.rollback()
        raise HTTPException(
            status_code=500,
            detail=f"Error handling user.created: {str(e)}"
        )


def handle_webhook_event(request: Request, session: Session) -> Dict[str, Any]:
    """Main webhook handler that routes events to appropriate handlers"""
    try:
        # Read the request body
        payload = request.body()

        # Verify the webhook signature
        event_data = verify_webhook_signature(request, payload)

        # Get the event type
        event_type = event_data.get("type")

        if event_type == "user.created":
            return handle_user_created(event_data, session)
        else:
            # For now, we only handle user.created
            # In the future, we can add handlers for other events
            return {"status": "ignored", "event_type": event_type}

    except HTTPException:
        # Re-raise HTTP exceptions
        raise
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Webhook processing error: {str(e)}"
        )
