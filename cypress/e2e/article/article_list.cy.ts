describe('Article page', () => {
  beforeEach(()=>{
    cy.login()
    cy.visit('/articles')
  })

  it('Check Article page', () => {
    cy.getByTestId('ArticlesPage').should('exist')
    cy.getByTestId('ArticlesPageFilters').should('exist')
    cy.getByTestId('ArticleList').should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
  })

})
