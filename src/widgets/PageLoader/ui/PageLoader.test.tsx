import { render, screen } from '@testing-library/react'
import { PageLoader } from './PageLoader'

describe('PageLoader test', () => {

  it('Initial state', () => {
    render(<PageLoader />)
    expect(screen.getByTestId('page-loader')).toBeInTheDocument()
    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })

})
