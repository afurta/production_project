import { selectByTestId } from 'cypress/helpers/selectByTestId'

describe('App routing', () => {
  describe('User is logged', () => {
    beforeEach(() => {
      cy.login('admin', '123')
    })
    it('User profile page', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('ProfilePage')).should('exist')
    })

    it('Articles page', () => {
      cy.visit('/articles')
      cy.get(selectByTestId('ArticlesPage')).should('exist')
    })
  })

  describe('User is not logged', () => {
    it('Main page route', () => {
      cy.visit('/')
      cy.get(selectByTestId('MainPage')).should('exist')
    })
    it('Redirect from the profile page', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('MainPage')).should('exist')
    })
    it('Incorrect route', () => {
      cy.visit('/asdfasdf')
      cy.get(selectByTestId('NotFoundPage')).should('exist')
    })
  })
})
