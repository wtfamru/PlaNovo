import { render, screen } from '@testing-library/react'
import { Navigation } from '../navigation'

// Mock all Clerk components for testing
jest.mock('@clerk/nextjs', () => ({
  SignedIn: ({ children }: { children: React.ReactNode }) => <div data-testid="signed-in">{children}</div>,
  SignedOut: ({ children }: { children: React.ReactNode }) => <div data-testid="signed-out">{children}</div>,
  UserButton: () => <div data-testid="user-button">User Button</div>,
}))

describe('Navigation', () => {
  it('renders the PlaNovo logo', () => {
    render(<Navigation />)
    expect(screen.getByText('PlaNovo')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navigation />)
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    // Pricing was removed, so we don't test for it
  })

  it('renders login and sign up buttons for signed out users', () => {
    render(<Navigation />)
    // Check for Sign Up buttons (desktop and mobile)
    expect(screen.getAllByText('Sign Up')).toHaveLength(2)
    // Check for Login buttons (desktop and mobile)
    expect(screen.getAllByText('Login')).toHaveLength(2)
  })

  it('renders signed out state correctly', () => {
    render(<Navigation />)
    expect(screen.getAllByTestId('signed-out')).toHaveLength(2) // Desktop and mobile versions
  })
}) 