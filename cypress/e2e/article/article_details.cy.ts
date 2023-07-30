const articleId = ''

describe('ArticleDetails page', () => {
  beforeEach(() => {
    cy.login()
    cy.createArticle().then((article) => {
      articleId = article.id
      cy.visit(`articles/${article.id}`)
    })
  })
  afterEach(() => {
    cy.deleteArticle(articleId)
  })

  it.skip('Check the ArticleDetails page content', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist')
  })

  it.skip('Check the ArticleRecomendationsList', () => {
    cy.getByTestId('ArticleRecomendationsList').should('exist')
  })

  it.skip('Check the Comment form', () => {
    cy.getByTestId('CommentForm.Form').should('exist')
    cy.sendComment('test')
  })

  it('Check the Rating form', () => {
    cy.intercept('GET', '**/articles/*', { fixture: 'article_details.json' })
    cy.getByTestId('RatingCard').should('exist')
    cy.getByTestId('RatingCard').scrollIntoView()
    cy.setRating('4', 'feetback')
  })
})
