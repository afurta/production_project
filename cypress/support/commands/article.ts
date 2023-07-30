import { Article } from '@/entities/Article'

const defaultArticle = {
  title: 'test title',
  subtitle: 'test subtitle',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.04.2022',
  userId: '1',
  type: ['IT'],
  blocks: []
}

export const createArticle = (article?: Article) => {
  return cy
    .request({
      method: 'POST',
      url: 'http://localhost:8000/articles',
      headers: { Authorization: '1234' },
      body: article ?? defaultArticle
    })
    .then((resp) => resp.body)
}

export const deleteArticle = (articleId: string) => {
  cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: '1234' }
  })
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>
      deleteArticle(articleId: string): Chainable<string>
    }
  }
}
