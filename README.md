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
- **Authentication**: Clerk (planned)
- **Backend**: FastAPI & Python (planned)
- **Database**: PostgreSQL (planned)
- **Deployment**: Vercel (planned)
- **File Storage**: Firebase Storage (planned)

## 📋 Current Implementation Status

### ✅ **Completed Features**

#### 1. **Landing Page (`/`)**
- **Modern, responsive design** with PlaNovo branding
- **Navigation bar** with Login and Request Demo buttons
- **Hero section** with compelling value proposition
- **Features section** showcasing key capabilities
- **Call-to-action sections** driving user engagement
- **Footer** with additional information

#### 2. **Authentication System (`/login`)**
- **Professional login page** with PlaNovo branding
- **Form validation** and user experience enhancements
- **Loading states** during authentication
- **Responsive design** for mobile and desktop
- **Navigation integration** with proper routing

#### 3. **Dashboard Foundation (`/dashboard`)**
- **Sidebar navigation** with key sections
- **User profile area** with logout functionality
- **Responsive layout** ready for content integration
- **Navigation between pages** with proper routing

#### 4. **Design System**
- **Custom color palette**: PlaNovo brand colors
- **Typography**: Outfit and Syne fonts
- **Component library**: shadcn/ui integration
- **Responsive design**: Mobile-first approach
- **Consistent styling**: Across all pages

### 🔄 **In Progress**
- **AI Requirements Analyst**: Conversational UI for SRS generation
- **Day-to-Day Automation Agents**: Auto-Task Creation, Intelligent Prioritization, Automated Workload Balancing
- **Reporting & Insights Agent**: Automated digests and summaries

### 📅 **Planned Features**

## 🎯 Key Feature Pillars (Roadmap)

### 1. **The Core Project Management Engine** *(Semester 7)*
- [ ] **Hierarchy Management**: Epics, Sprints, Tasks, and Sub-tasks
- [ ] **Estimation System**: Story Points for effort tracking
- [ ] **Workflow Management**: Customizable Kanban boards
- [ ] **Visualizations**: 
  - [ ] Traditional Kanban board view
  - [ ] Dense List view
  - [ ] Interactive Timeline (Gantt) view

### 2. **The Agentic AI Layer** *(Semester 7-8)*
- [ ] **AI Requirements Analyst**: Conversational UI for SRS generation
- [ ] **Day-to-Day Automation Agents**:
  - [ ] Auto-Task Creation from text
  - [ ] Intelligent Prioritization
  - [ ] Automated Workload Balancing
- [ ] **Reporting & Insights Agent**: Automated digests and summaries

### 3. **The Collaborative Hub** *(Semester 8)*
- [ ] **User & Team Management**: Multi-tenant system with role-based access
- [ ] **System Tools**:
  - [ ] Command Palette (Cmd+K)
  - [ ] Smart Notification Center
- [ ] **Integrations**: GitHub and Slack connections

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

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

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
src/
├── app/                    # Next.js App Router
│   ├── dashboard/         # Dashboard pages
│   ├── login/            # Authentication pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page
├── components/            # React components
│   ├── ui/              # shadcn/ui components
│   ├── navigation.tsx    # Navigation component
│   ├── hero-section.tsx  # Landing page hero
│   ├── login-form.tsx    # Login form
│   └── dashboard-*.tsx   # Dashboard components
├── lib/                  # Utility functions
└── hooks/                # Custom React hooks
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

## 🔄 Continuous Integration

### GitHub Actions Workflow

Our CI/CD pipeline ensures code quality and automated testing:

#### **Workflow Triggers**
- **Push to main branch**: Automatic testing and deployment
- **Pull requests**: Code quality checks and testing
- **Manual triggers**: For specific deployment needs

#### **CI Pipeline Steps**

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
     run: npm test
   ```

5. **Deployment**
   ```yaml
   - name: Deploy to Vercel
     run: vercel --prod
   ```

#### **Quality Gates**
- ✅ **Linting**: ESLint passes with no errors
- ✅ **Type Checking**: TypeScript compilation successful
- ✅ **Security**: No high/critical vulnerabilities
- ✅ **Build**: Production build successful
- ✅ **Tests**: All tests passing
- ✅ **Performance**: Lighthouse score > 90

#### **Automated Checks**
- **Code Coverage**: Minimum 80% coverage required
- **Performance**: Bundle size analysis
- **Accessibility**: Automated a11y testing
- **Cross-browser**: Testing on Chrome, Firefox, Safari

#### **Deployment Strategy**
- **Staging**: Automatic deployment on PR merge to develop
- **Production**: Manual approval required for main branch
- **Rollback**: One-click rollback to previous version

### Local Development Workflow

1. **Pre-commit Hooks**
   ```bash
   # Install pre-commit hooks
   npm run prepare
   
   # Run checks before commit
   npm run pre-commit
   ```

2. **Development Commands**
   ```bash
   # Start development with hot reload
   npm run dev
   
   # Run tests in watch mode
   npm run test:watch
   
   # Check code quality
   npm run lint:fix
   ```

3. **Quality Assurance**
   ```bash
   # Run all quality checks
   npm run quality
   
   # Generate coverage report
   npm run test:coverage
   ```

### Environment Management

#### **Environment Variables**
```bash
# Development
.env.local

# Staging
.env.staging

# Production
.env.production
```

#### **Secrets Management**
- **GitHub Secrets**: API keys, deployment tokens
- **Vercel Environment**: Production environment variables
- **Local Development**: `.env.local` for local secrets

## 🧪 Testing

### Testing Strategy
- **Unit Tests**: Jest for component testing
- **Integration Tests**: Testing API interactions
- **E2E Tests**: Playwright for user workflows
- **Visual Regression**: Screenshot testing

### Test Commands
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## 📦 Deployment

### Development
- Local development with `npm run dev`
- Hot reload enabled
- Development server on port 3000

### Staging
- Automatic deployment on PR merge
- Vercel preview deployments
- Environment-specific testing

### Production
- Manual approval required
- Blue-green deployment strategy
- Automatic rollback on failure
- Performance monitoring

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

*Last updated: July 2024*
