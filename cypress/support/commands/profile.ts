export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('ProfilePageOnEdit').click()
  cy.getByTestId('ProfileCard.firstname').clear().type(firstname)
  cy.getByTestId('ProfileCard.lastname').clear().type(lastname)
  cy.getByTestId('ProfilePageOnSave').click()
}

export const resetProfile = (profileId: string) => {
  cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: {
      Authorization: '1234'
    },
    body: {
      id: '4',
      first: 'test firstname',
      lastname: 'test lastname',
      age: 465,
      currency: 'RUB',
      country: 'Russia',
      city: 'Moscow',
      username: 'ulbi tv',
      avatar:
        'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg'
    }
  })
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      resetProfile(profileId: string): Chainable<User>
    }
  }
}
