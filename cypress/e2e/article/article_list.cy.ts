describe('Article page', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/articles')
  })

  it('Check Article page', () => {
    cy.getByTestId('ArticlesPage').should('exist')
    cy.getByTestId('ArticlesPageFilters').should('exist')
    cy.getByTestId('ArticleList').should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
  })

  it('Check Article page use stubbs', () => {
    cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' })
    cy.getByTestId('ArticlesPage').should('exist')
    cy.getByTestId('ArticlesPageFilters').should('exist')
    cy.getByTestId('ArticleList').should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
  })
})
