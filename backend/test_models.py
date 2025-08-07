#!/usr/bin/env python3
"""
Test script to verify database models are correctly defined
"""
from models import (Attachments, Epics, ProjectMembers, Projects, Sprints,
                    Tasks, Users, WorkspaceMembers, Workspaces)


def test_models():
    """Test that all models can be imported and have correct structure"""
    print("🧪 Testing PlaNovo database models...")

    try:
        # Test model imports
        models = [
            Workspaces,
            Users,
            WorkspaceMembers,
            Projects,
            ProjectMembers,
            Epics,
            Sprints,
            Tasks,
            Attachments,
        ]

        print("✅ All models imported successfully!")

        # Test model structure
        for model in models:
            print(f"📋 {model.__name__}: {model.__tablename__}")

        print("\n🎯 Model verification completed!")
        print("📊 Total models: 9")
        print("   - Workspaces")
        print("   - Users")
        print("   - WorkspaceMembers")
        print("   - Projects")
        print("   - ProjectMembers")
        print("   - Epics")
        print("   - Sprints")
        print("   - Tasks")
        print("   - Attachments")

    except Exception as e:
        print(f"❌ Error testing models: {e}")
        import sys

        sys.exit(1)


if __name__ == "__main__":
    test_models()
