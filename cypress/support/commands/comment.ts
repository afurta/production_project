export const sendComment = (text?:string) => {
  cy.getByTestId('CommentForm.CommentText').clear().type(text)
  cy.getByTestId('CommentForm.onSendHandler').click()
}


declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      sendComment(text?: string): Chainable<string>
    }
  }
}
