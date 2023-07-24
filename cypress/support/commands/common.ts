import { User } from '@/entities/User'
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/LS_Constants'
import { selectByTestId } from '../../helpers/selectByTestId'

export const login = (username = 'testuser', password = '123') => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body))
    return body
  })
}

export const getByTestId = (id: string) => {
  return cy.get(selectByTestId(id))
} 

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<User>
      getByTestId(id?: string): Chainable<JQuery<HTMLElement>>
    }
  }
}
