# PlaNovo Backend API

FastAPI backend for PlaNovo - Agentic AI for Project Management.

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Virtual environment (already created)

### Setup

1. **Activate Virtual Environment**
   ```bash
   # Windows
   venv\Scripts\activate
   
   # Linux/Mac
   source venv/bin/activate
   ```

2. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Configure Environment Variables**
   - Edit `.env` file
   - Replace `DATABASE_URL="postgres://..."` with your actual Vercel Postgres connection string

4. **Run the Server**
   ```bash
   # Option 1: Using the startup script (recommended for development)
   python start.py
   
   # Option 2: Direct uvicorn command
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   
   # Option 3: Using the main.py file
   python main.py
   ```

## 📡 API Endpoints

### Health Check
- `GET /` - Root endpoint with status
- `GET /health` - Health check endpoint

### API Documentation
- `GET /docs` - Interactive API documentation (Swagger UI)
- `GET /redoc` - Alternative API documentation (ReDoc)

## 🔧 Development

### Project Structure
```
backend/
├── main.py              # FastAPI application
├── start.py             # Development startup script
├── requirements.txt     # Python dependencies
├── .env                 # Environment variables
├── venv/               # Virtual environment
└── README.md           # This file
```

### Environment Variables
- `DATABASE_URL` - PostgreSQL connection string (required)

### CORS Configuration
The API is configured to allow requests from:
- `http://localhost:3000` (local development)
- `https://planovo.vercel.app` (production frontend)

## 🚀 Next Steps

1. **Database Integration**
   - Set up PostgreSQL connection
   - Create database models
   - Implement CRUD operations

2. **Authentication**
   - Integrate with Clerk authentication
   - Add JWT token validation

3. **API Endpoints**
   - Workspaces management
   - Projects CRUD
   - Tasks management
   - User management

## 📝 Notes

- The server runs on `http://localhost:8000` by default
- Auto-reload is enabled for development
- CORS is configured for frontend integration
- Environment variables are loaded from `.env` file 