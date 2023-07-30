let profileId = ''

describe('Profile page', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      profileId = data.id
      cy.visit(`/profile/${data.id}`)
    })
  })

  afterEach(() => {
    cy.resetProfile(profileId)
  })

  it('User is loaded', () => {
    cy.getByTestId('ProfileCard.firstname').should(
      'have.value',
      'test firstname'
    )
    cy.getByTestId('ProfileCard.lastname').should('have.value', 'test lastname')
  })

  it('User update profile', () => {
    const fistname = 'test firstname new',
      lastname = 'test lastname new'

    cy.updateProfile(fistname, lastname)
    cy.getByTestId('ProfileCard.firstname').should('have.value', fistname)
    cy.getByTestId('ProfileCard.lastname').should('have.value', lastname)
  })
})
