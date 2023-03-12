import { fireEvent, render, screen } from '@testing-library/react'
import { Button, ThemeButton } from './Button'

const fn = jest.fn()

describe('Button test', () => {

  it('Initial state', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  it('Check Button theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('clear')
    expect(screen.getByText('TEST')).toHaveClass('Button')
  })

  it('Check click event', () => {
    render(<Button theme={ThemeButton.CLEAR} onClick={fn}>TEST</Button>)
    fireEvent.click(screen.getByText('TEST'))
    expect(fn).toBeCalledTimes(1)
  })

})
