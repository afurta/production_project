import { render, screen } from '@testing-library/react'
import { Loader } from './Loader'


describe('Loader test', () => {

  it('Initial state', () => {
    render(<Loader />)
    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })

})
