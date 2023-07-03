import { fireEvent, render, screen } from '@testing-library/react'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { Sidebar } from './Sidebar'


describe('Sidebar test', () => {

  it('Initial state', () => {
    componentRender(<Sidebar />)

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    expect(screen.getByTestId('theme-switcher')).toBeInTheDocument()
    expect(screen.getByTestId('language-switcher')).toBeInTheDocument()
  })

  it('Check collapse event', () => {
    componentRender(<Sidebar />)

    expect(screen.queryByTestId('sidebar')).not.toHaveClass('Button')

    fireEvent.click(screen.getByTestId('sidebar-btn'))

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })

})
