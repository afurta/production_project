import { fireEvent, render, screen } from '@testing-library/react'
import { withTranslation } from 'react-i18next'
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation'
import { Sidebar } from './Sidebar'


describe('Sidebar test', () => {

  it('Initial state', () => {
    renderWithTranslation(<Sidebar />)

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    expect(screen.getByTestId('theme-switcher')).toBeInTheDocument()
    expect(screen.getByTestId('language-switcher')).toBeInTheDocument()
  })

  it('Check collapse event', () => {
    renderWithTranslation(<Sidebar />)

    expect(screen.queryByTestId('sidebar')).not.toHaveClass('Button')

    fireEvent.click(screen.getByTestId('sidebar-btn'))

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })

})
