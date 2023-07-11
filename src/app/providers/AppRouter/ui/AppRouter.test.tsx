import { getAboutRoute, getAdminPanelRoute, getMainRoute, getProfileRoute } from '@/shared/constants/router'
import { AppRouter } from './AppRouter'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { screen } from '@testing-library/react'
import { UserRoles } from '@/entities/User'

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

  // it('Authorized user', async () => {
  //   componentRender(<AppRouter />, { route: getProfileRoute('1'), initialStore: { _inited: true, autData: {} } })

  //   const page = await screen.findByTestId('ProfilePage')
  //   expect(page).toBeInTheDocument()
  // })

  it('Not authorized user', async () => {
    componentRender(<AppRouter />, { route: getProfileRoute('1') })

    const page = await screen.findByTestId('MainPage')
    expect(page).toBeInTheDocument()
  })

  // TODO
  // Проверить на запрещенную роль
  // it('Avaliable user role', async () => {
  //   componentRender(
  //     <AppRouter />,
  //     {
  //       route: getAdminPanelRoute(),
  //       initialStore: { _inited: true, autData: { roles: [UserRoles.ADMIN] } }
  //     }
  //   )

  //   const page = await screen.findByTestId('AdminPanel')
  //   expect(page).toBeInTheDocument()
  // })
})
