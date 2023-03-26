import { Counter } from 'entities/Counter/ui/Counter'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Counter', () => {

  test('Counter', () => {
    componentRender(<Counter />, {
      initialStore: { counter: { value: 10 } }
    })
    expect(screen.getByText(10)).toBeInTheDocument()
  })

  test('Counter incrementEvent', () => {
    componentRender(<Counter />, {
      initialStore: { counter: { value: 10 } }
    })
    userEvent.click(screen.getByTestId('btn-increment'))
    expect(screen.getByTestId('counter-value')).toHaveTextContent('11')
  })

  test('Counter decrementEvent', () => {
    componentRender(<Counter />, {
      initialStore: { counter: { value: 10 } }
    })
    userEvent.click(screen.getByTestId('btn-decrement'))
    expect(screen.getByTestId('counter-value')).toHaveTextContent('9')
  })


})
