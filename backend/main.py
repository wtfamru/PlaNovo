from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from sqlmodel import Session

from database import get_session

# Load environment variables
load_dotenv()

# Create FastAPI app instance
app = FastAPI(
    title="PlaNovo API",
    description="Backend API for PlaNovo - Agentic AI for Project Management",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Configure CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # Local development
        "https://planovo.vercel.app",  # Production frontend
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    """Root endpoint for health check"""
    return {"status": "ok", "message": "PlaNovo API is running"}


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "service": "PlaNovo API",
        "version": "1.0.0"
    }


@app.get("/db-test")
async def test_database(session: Session = Depends(get_session)):
    """Test database connection"""
    try:
        # Simple database test
        session.execute("SELECT 1")
        return {"status": "ok", "message": "Database connection successful"}
    except Exception as e:
        return {
            "status": "error",
            "message": f"Database connection failed: {str(e)}"
        }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
