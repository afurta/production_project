export const setRating = (rating:string, feetback = 'feetback' )=>{
  cy.getByTestId(`StarRating+${rating}`).click()
  cy.getByTestId('RatingCard.Input').clear().type(feetback)
  cy.getByTestId('RatingCard.AcceptHandler').click()
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      setRating(rating:string, feetback?:string): Chainable<void>
    }
  }
}
