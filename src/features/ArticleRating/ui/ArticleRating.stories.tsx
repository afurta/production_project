import { ComponentStory, ComponentMeta } from '@storybook/react'
import ArticleRating from './ArticleRating'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/ArticleRating',
  component: ArticleRating
} as ComponentMeta<typeof ArticleRating>

const Template: ComponentStory<typeof ArticleRating> = (args) => (
  <ArticleRating {...args} />
)

export const Normal = Template.bind({})
Normal.args = {
  articleId: '1'
}
Normal.decorators = [
  StoreDecorator({
    user: {
      authData: {
        id: '123',
        username: 'username'
      }
    }
  })
]
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: {
        rate: 4
      }
    }
  ]
}

export const WithoutRate = Template.bind({})
WithoutRate.args = {
  articleId: '1'
}
WithoutRate.decorators = [
  StoreDecorator({
    user: {
      authData: {
        id: '123',
        username: 'username'
      }
    }
  })
]
WithoutRate.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: {}
    }
  ]
}
