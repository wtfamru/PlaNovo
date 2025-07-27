import { render, screen } from '@testing-library/react'
import { Navigation } from '../navigation'

describe('Navigation', () => {
  it('renders the PlaNovo logo', () => {
    render(<Navigation />)
    expect(screen.getByText('PlaNovo')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navigation />)
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders login and demo buttons', () => {
    render(<Navigation />)
    // Use getAllByText since there are multiple Login buttons (desktop and mobile)
    expect(screen.getAllByText('Login')).toHaveLength(2)
    expect(screen.getAllByText('Request a Demo')).toHaveLength(2)
  })
}) 