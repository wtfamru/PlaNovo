import datetime
from typing import Optional

from sqlmodel import Field, SQLModel


class Workspaces(SQLModel, table=True):
    id: str = Field(primary_key=True)
    clerk_organization_id: str = Field(unique=True, index=True)
    name: str
    created_at: datetime.datetime = Field(
        default_factory=datetime.datetime.utcnow, nullable=False
    )


class Users(SQLModel, table=True):
    id: str = Field(primary_key=True)
    email: str = Field(unique=True, index=True)
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    job_title: Optional[str] = None
    avatar_url: Optional[str] = None
    created_at: datetime.datetime = Field(
        default_factory=datetime.datetime.utcnow, nullable=False
    )


class WorkspaceMembers(SQLModel, table=True):
    user_id: str = Field(foreign_key="users.id", primary_key=True)
    workspace_id: str = Field(foreign_key="workspaces.id", primary_key=True)
    role: str


class Projects(SQLModel, table=True):
    id: str = Field(primary_key=True)
    workspace_id: str = Field(foreign_key="workspaces.id")
    name: str
    created_at: datetime.datetime = Field(
        default_factory=datetime.datetime.utcnow, nullable=False
    )


class ProjectMembers(SQLModel, table=True):
    user_id: str = Field(foreign_key="users.id", primary_key=True)
    project_id: str = Field(foreign_key="projects.id", primary_key=True)


class Epics(SQLModel, table=True):
    id: str = Field(primary_key=True)
    project_id: str = Field(foreign_key="projects.id")
    title: str
    description: Optional[str] = None
    created_at: datetime.datetime = Field(
        default_factory=datetime.datetime.utcnow, nullable=False
    )


class Sprints(SQLModel, table=True):
    id: str = Field(primary_key=True)
    project_id: str = Field(foreign_key="projects.id")
    name: str
    start_date: Optional[datetime.date] = None
    end_date: Optional[datetime.date] = None
    created_at: datetime.datetime = Field(
        default_factory=datetime.datetime.utcnow, nullable=False
    )


class Tasks(SQLModel, table=True):
    id: str = Field(primary_key=True)
    project_id: str = Field(foreign_key="projects.id")
    sprint_id: Optional[str] = Field(foreign_key="sprints.id", default=None)
    epic_id: Optional[str] = Field(foreign_key="epics.id", default=None)
    title: str
    description: Optional[str] = None
    status: str
    priority: Optional[str] = None
    story_points: Optional[int] = None
    assignee_id: Optional[str] = Field(foreign_key="users.id", default=None)
    due_date: Optional[datetime.date] = None
    created_at: datetime.datetime = Field(
        default_factory=datetime.datetime.utcnow, nullable=False
    )


class Attachments(SQLModel, table=True):
    id: str = Field(primary_key=True)
    task_id: str = Field(foreign_key="tasks.id")
    uploaded_by_id: str = Field(foreign_key="users.id")
    file_name: str
    file_url: str
    file_type: Optional[str] = None
    created_at: datetime.datetime = Field(
        default_factory=datetime.datetime.utcnow, nullable=False
    )
