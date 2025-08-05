# PlaNovo - Agentic AI for Project Management

> Stop managing projects. Start piloting them with PlaNovo's agentic AI platform.

## 🚀 Project Overview

PlaNovo is an intelligent, agentic workflow platform designed to be the autopilot for modern product development. Our mission is to move beyond passive, traditional project management tools by creating an active system of collaboration using AI agents to automate tedious administrative tasks.

## 🎯 Vision & Mission

**Vision**: To be the autopilot for modern product development
**Mission**: Move beyond passive, traditional project management tools by creating an active system of collaboration using AI agents to automate the most tedious administrative tasks, freeing teams to focus on building and innovation.

## 🏗️ Architecture Overview

### Technology Stack
- **Frontend**: Next.js 15.4.4 & TypeScript
- **UI Framework**: shadcn/ui with Tailwind CSS
- **Styling**: Custom PlaNovo design system
- **Icons**: Lucide React
- **Testing**: Jest with React Testing Library
- **Authentication**: ✅ Clerk (Fully Integrated)
- **Database**: Neon PostgreSQL (Next Step)
- **Backend**: FastAPI & Python (Planned)
- **Deployment**: ✅ Vercel (Live)
- **File Storage**: Firebase Storage (Planned)

## 📋 Current Implementation Status

### ✅ **Completed Features**

#### 1. **Landing Page (`/`)**
- **Modern, responsive design** with PlaNovo branding
- **Navigation bar** with Login and Request Demo buttons
- **Hero section** with compelling value proposition
- **Features section** showcasing key capabilities
- **Call-to-action sections** driving user engagement
- **Footer** with additional information
- **Auto-redirect** authenticated users to dashboard

#### 2. **Complete Authentication System** ✅ **UPDATED**
- **Custom Sign In Page** (`/login`) with PlaNovo branding and dashboard redirect
- **Custom Sign Up Page** (`/signup`) with seamless onboarding and dashboard redirect
- **User Profile Management** with Clerk's UserButton component
- **Organization Management** (`/organization`) for team settings
- **Create Organization** (`/create-organization`) for team setup
- **Unauthorized Sign In** (`/unauthorized-sign-in`) for security verification
- **Combined Auth Page** (`/auth`) with toggle between sign in/up
- **Middleware Protection** for all routes
- **Custom Styling** matching PlaNovo design system
- **Responsive Design** for all devices
- **Proper Routing** - authenticated users automatically redirected to dashboard
- **User Profile Popup** - click user avatar for detailed profile information

#### 3. **Dashboard Foundation (`/dashboard`)** ✅ **ENHANCED**
- **Sidebar navigation** with key sections
- **User profile area** with Clerk UserButton and user name display
- **Responsive layout** ready for content integration
- **Navigation between pages** with proper routing
- **Dashboard cards** for project overview
- **Personalized welcome message** with user's name
- **Clean user interface** with no duplicate elements
- **Professional user profile popup** with all user details

#### 4. **Design System**
- **Custom color palette**: PlaNovo brand colors
- **Typography**: Outfit and Syne fonts
- **Component library**: shadcn/ui integration with 40+ components
- **Responsive design**: Mobile-first approach
- **Consistent styling**: Across all pages

#### 5. **Testing Infrastructure**
- **Jest configuration** with React Testing Library
- **Component tests** for login form, navigation, and dashboard sidebar
- **Test coverage** reporting setup
- **CI/CD ready** testing pipeline
- **All 14 tests passing** ✅

#### 6. **Production Deployment** ✅ **NEW**
- **Live on Vercel**: [https://planovo.vercel.app](https://planovo.vercel.app)
- **Custom Domain**: Configured and working
- **Environment Variables**: Properly configured
- **Build Optimization**: All pages optimized
- **Performance**: Fast loading times

### 🔄 **In Progress**
- **AI Requirements Analyst**: Conversational UI for SRS generation
- **Day-to-Day Automation Agents**: Auto-Task Creation, Intelligent Prioritization, Automated Workload Balancing
- **Reporting & Insights Agent**: Automated digests and summaries

### 📅 **Next Steps**

#### **Phase 1: Database Integration** 🎯 **CURRENT FOCUS**
- [ ] **Neon PostgreSQL Setup**
  - [ ] Create Neon database instance
  - [ ] Configure connection strings
  - [ ] Set up database schema
  - [ ] Implement data models
- [ ] **Backend API Development**
  - [ ] FastAPI server setup
  - [ ] Database connection layer
  - [ ] Authentication integration with Clerk
  - [ ] CRUD operations for projects/tasks
- [ ] **Frontend-Backend Integration**
  - [ ] API client setup
  - [ ] Data fetching hooks
  - [ ] Real-time updates

#### **Phase 2: Core Features** *(Semester 7)*
- [ ] **Hierarchy Management**: Epics, Sprints, Tasks, and Sub-tasks
- [ ] **Estimation System**: Story Points for effort tracking
- [ ] **Workflow Management**: Customizable Kanban boards
- [ ] **Visualizations**: 
  - [ ] Traditional Kanban board view
  - [ ] Dense List view
  - [ ] Interactive Timeline (Gantt) view

#### **Phase 3: AI Integration** *(Semester 7-8)*
- [ ] **AI Requirements Analyst**: Conversational UI for SRS generation
- [ ] **Day-to-Day Automation Agents**:
  - [ ] Auto-Task Creation from text
  - [ ] Intelligent Prioritization
  - [ ] Automated Workload Balancing
- [ ] **Reporting & Insights Agent**: Automated digests and summaries

#### **Phase 4: Collaboration Hub** *(Semester 8)*
- [ ] **User & Team Management**: Multi-tenant system with role-based access
- [ ] **System Tools**:
  - [ ] Command Palette (Cmd+K)
  - [ ] Smart Notification Center
- [ ] **Integrations**: GitHub and Slack connections

## 🔐 Authentication System Details

### **Clerk Integration** ✅ **COMPLETE**

#### **Custom Authentication Pages**
- **Sign In**: [https://planovo.vercel.app/login](https://planovo.vercel.app/login)
- **Sign Up**: [https://planovo.vercel.app/signup](https://planovo.vercel.app/signup)
- **User Profile**: [https://planovo.vercel.app/user](https://planovo.vercel.app/user)
- **Organization Profile**: [https://planovo.vercel.app/organization](https://planovo.vercel.app/organization)
- **Create Organization**: [https://planovo.vercel.app/create-organization](https://planovo.vercel.app/create-organization)
- **Unauthorized Sign In**: [https://planovo.vercel.app/unauthorized-sign-in](https://planovo.vercel.app/unauthorized-sign-in)

#### **Features Implemented**
- ✅ **Custom Branding**: All pages match PlaNovo design system
- ✅ **Responsive Design**: Works on all devices
- ✅ **Security**: Proper middleware protection
- ✅ **User Management**: Profile and organization settings
- ✅ **Error Handling**: Graceful error states
- ✅ **Loading States**: Smooth user experience

#### **Technical Implementation**
```typescript
// Middleware protection
import { clerkMiddleware } from "@clerk/nextjs/server";
export default clerkMiddleware();

// Server-side authentication
import { auth } from "@clerk/nextjs/server";
const { userId } = await auth();

// Custom styling
appearance={{
  elements: {
    formButtonPrimary: "bg-planovo-primary hover:bg-planovo-accent",
    // ... custom styling
  }
}}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd planovo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:ci` - Run tests for CI environment

## 🎨 Design System

### Colors
- **Primary**: `#E2EB98` (PlaNovo Primary)
- **Secondary**: `#617073` (PlaNovo Secondary)
- **Dark**: `#040403` (PlaNovo Dark)
- **Light**: `#C9CAD9` (PlaNovo Light)
- **Accent**: `#D5C67A` (PlaNovo Accent)

### Typography
- **Primary Font**: Outfit (Google Fonts)
- **Secondary Font**: Syne (Google Fonts)

## 📁 Project Structure

```
planovo/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── auth/              # Combined auth page
│   │   ├── login/             # Sign in page
│   │   ├── signup/            # Sign up page
│   │   ├── user/              # User profile page
│   │   ├── organization/      # Organization settings
│   │   ├── create-organization/ # Create organization
│   │   ├── unauthorized-sign-in/ # Security verification
│   │   ├── dashboard/         # Dashboard pages
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Landing page
│   ├── components/             # React components
│   │   ├── ui/               # shadcn/ui components (40+ components)
│   │   ├── __tests__/        # Component tests
│   │   ├── navigation.tsx     # Navigation component
│   │   ├── hero-section.tsx   # Landing page hero
│   │   ├── login-form.tsx     # Login form
│   │   ├── dashboard-*.tsx    # Dashboard components
│   │   ├── features-section.tsx # Features showcase
│   │   ├── cta-section.tsx    # Call-to-action
│   │   └── footer.tsx         # Footer component
│   ├── lib/                   # Utility functions
│   └── hooks/                 # Custom React hooks
├── public/                    # Static assets
├── jest.config.js            # Jest configuration
├── jest.setup.js             # Jest setup
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## 🔧 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow ESLint configuration
- Use Prettier for code formatting
- Write meaningful component and function names

### Component Structure
- Use functional components with hooks
- Implement proper error boundaries
- Follow React best practices
- Use shadcn/ui for consistent UI components

### Styling
- Use Tailwind CSS for styling
- Follow the PlaNovo design system
- Ensure responsive design
- Maintain accessibility standards

## 🧪 Testing

### Testing Strategy
- **Unit Tests**: Jest with React Testing Library for component testing
- **Component Tests**: Testing individual UI components
- **Integration Tests**: Testing component interactions
- **E2E Tests**: Playwright for user workflows (planned)

### Test Commands
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run tests for CI environment
npm run test:ci
```

### Current Test Coverage
- ✅ **Login Form**: Form validation and user interactions
- ✅ **Navigation**: Component rendering and navigation links
- ✅ **Authentication**: Clerk integration tests
- 🔄 **Additional Components**: More component tests in progress

## 🚀 Deployment

### **Production Deployment** ✅ **LIVE**
- **URL**: [https://planovo.vercel.app](https://planovo.vercel.app)
- **Platform**: Vercel
- **Status**: Fully deployed and functional
- **Performance**: Optimized build with fast loading

### **Environment Configuration**
```bash
# Production Environment Variables
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

### **Build Process**
- ✅ **TypeScript Compilation**: No errors
- ✅ **ESLint**: Code quality checks
- ✅ **Jest Tests**: All tests passing
- ✅ **Build Optimization**: All pages optimized
- ✅ **Performance**: Lighthouse score optimized

## 🔄 Continuous Integration

### **Current Status**
- ✅ **Build Verification**: All builds successful
- ✅ **Test Suite**: 8/8 tests passing
- ✅ **Type Checking**: No TypeScript errors
- ✅ **Linting**: Code quality maintained

### **GitHub Actions Workflow** (Planned)

Our CI/CD pipeline will ensure code quality and automated testing:

#### **Workflow Triggers**
- **Push to main branch**: Automatic testing and deployment
- **Pull requests**: Code quality checks and testing
- **Manual triggers**: For specific deployment needs

#### **CI Pipeline Steps** (Planned)

1. **Code Quality Checks**
   ```yaml
   - name: Lint and Type Check
     run: |
       npm run lint
       npm run type-check
   ```

2. **Dependency Security**
   ```yaml
   - name: Security Audit
     run: npm audit --audit-level moderate
   ```

3. **Build Verification**
   ```yaml
   - name: Build Application
     run: npm run build
   ```

4. **Testing Suite**
   ```yaml
   - name: Run Tests
     run: npm run test:ci
   ```

5. **Deployment**
   ```yaml
   - name: Deploy to Vercel
     run: vercel --prod
   ```

## 🗄️ Database Integration (Next Step)

### **Neon PostgreSQL Setup**

#### **Phase 1: Database Foundation**
- [ ] **Create Neon Instance**
  - [ ] Set up Neon account
  - [ ] Create database cluster
  - [ ] Configure connection strings
  - [ ] Set up environment variables

- [ ] **Database Schema Design**
  ```sql
  -- Users table (extends Clerk user data)
  CREATE TABLE users (
    id UUID PRIMARY KEY,
    clerk_user_id VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
  );

  -- Organizations table
  CREATE TABLE organizations (
    id UUID PRIMARY KEY,
    clerk_org_id VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
  );

  -- Projects table
  CREATE TABLE projects (
    id UUID PRIMARY KEY,
    organization_id UUID REFERENCES organizations(id),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
  );

  -- Tasks table
  CREATE TABLE tasks (
    id UUID PRIMARY KEY,
    project_id UUID REFERENCES projects(id),
    assigned_to UUID REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) DEFAULT 'todo',
    priority VARCHAR(20) DEFAULT 'medium',
    story_points INTEGER,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
  );
  ```

#### **Phase 2: Backend API**
- [ ] **FastAPI Server Setup**
  - [ ] Create FastAPI application
  - [ ] Configure CORS and middleware
  - [ ] Set up database connection
  - [ ] Implement authentication middleware

- [ ] **API Endpoints**
  ```python
  # Example FastAPI endpoints
  @app.get("/api/projects")
  async def get_projects(user: User = Depends(get_current_user)):
      return await get_user_projects(user.id)

  @app.post("/api/projects")
  async def create_project(
      project: ProjectCreate,
      user: User = Depends(get_current_user)
  ):
      return await create_user_project(user.id, project)
  ```

#### **Phase 3: Frontend Integration**
- [ ] **API Client Setup**
  - [ ] Create API client with authentication
  - [ ] Implement data fetching hooks
  - [ ] Add error handling and loading states
  - [ ] Set up real-time updates

- [ ] **Data Management**
  ```typescript
  // Example React Query setup
  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: () => api.getProjects(),
  });
  ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Pull Request Guidelines
- ✅ All CI checks must pass
- ✅ Code review required
- ✅ Tests must be included
- ✅ Documentation updated
- ✅ No breaking changes

## 📄 License

*License information to be added*

## 📞 Contact

*Contact information to be added*

---

**PlaNovo** - Transforming project management with AI-powered automation.

*Last updated: August 2025*
