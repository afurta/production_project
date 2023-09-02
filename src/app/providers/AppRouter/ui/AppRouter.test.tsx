import { getAboutRoute, getProfileRoute } from '@/shared/constants/router'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { screen } from '@testing-library/react'
import { AppRouter } from './AppRouter'

describe('AppRouter', () => {
  it('Check page', async () => {
    componentRender(<AppRouter />, { route: getAboutRoute() })

    const page = await screen.findByTestId('AboutPage')
    expect(page).toBeInTheDocument()
  })

  it('Inccorect path', async () => {
    componentRender(<AppRouter />, { route: '/asdf' })

    const page = await screen.findByTestId('NotFoundPage')
    expect(page).toBeInTheDocument()
  })

  it('Not authorized user', async () => {
    componentRender(<AppRouter />, { route: getProfileRoute('1') })

    const page = await screen.findByTestId('MainPage')
    expect(page).toBeInTheDocument()
  })
})
