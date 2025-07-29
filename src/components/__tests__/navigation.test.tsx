import { render, screen } from '@testing-library/react'
import { Navigation } from '../navigation'

// Mock all Clerk components for testing
jest.mock('@clerk/nextjs', () => ({
  SignedIn: ({ children }: { children: React.ReactNode }) => <div data-testid="signed-in">{children}</div>,
  SignedOut: ({ children }: { children: React.ReactNode }) => <div data-testid="signed-out">{children}</div>,
  UserButton: () => <div data-testid="user-button">User Button</div>,
}))

describe('Navigation', () => {
  it('renders the PlaNovo logo for both signed in and signed out states', () => {
    render(<Navigation />)
    // Both signed-in and signed-out states render the logo, so we should find multiple instances
    expect(screen.getAllByText('PlaNovo')).toHaveLength(2)
  })

  it('renders navigation links for signed out users', () => {
    render(<Navigation />)
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders login and sign up buttons for signed out users', () => {
    render(<Navigation />)
    // Check for Sign Up buttons (desktop and mobile)
    expect(screen.getAllByText('Sign Up')).toHaveLength(2)
    // Check for Login buttons (desktop and mobile)
    expect(screen.getAllByText('Login')).toHaveLength(2)
  })

  it('renders both signed in and signed out states correctly', () => {
    render(<Navigation />)
    // Both states are rendered simultaneously in the test environment
    expect(screen.getAllByTestId('signed-out')).toHaveLength(3) // Desktop, mobile, and logo sections
    expect(screen.getAllByTestId('signed-in')).toHaveLength(3) // Desktop, mobile, and logo sections
  })

  it('renders user button for signed in users', () => {
    render(<Navigation />)
    expect(screen.getAllByTestId('user-button')).toHaveLength(2) // Desktop and mobile versions
  })
}) 