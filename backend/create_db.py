#!/usr/bin/env python3
"""
Database initialization script for PlaNovo
Creates all tables in the Vercel Postgres database
"""
from database import create_db_and_tables
from models import (  # noqa: F401
    Workspaces,
    Users,
    WorkspaceMembers,
    Projects,
    ProjectMembers,
    Epics,
    Sprints,
    Tasks,
    Attachments,
)


def main():
    """Create all database tables"""
    print("🚀 Initializing PlaNovo database...")

    try:
        # Import all models to register them with SQLModel
        print("📋 Registering models...")

        # Create all tables
        print("🔨 Creating database tables...")
        create_db_and_tables()

        print("✅ Database initialization completed successfully!")
        print("📊 Tables created:")
        print("   - workspaces")
        print("   - users")
        print("   - workspace_members")
        print("   - projects")
        print("   - project_members")
        print("   - epics")
        print("   - sprints")
        print("   - tasks")
        print("   - attachments")

    except Exception as e:
        print(f"❌ Error initializing database: {e}")
        import sys

        sys.exit(1)


if __name__ == "__main__":
    main()
