import withMock from 'storybook-addon-mock'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ArticleRecomendationsList } from './ArticleRecomendationsList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Article } from '@/entities/Article'
import { UserRoles } from '@/entities/User'


const article: Article = {
  id: '1',
  img: '',
  createdAt: '',
  views: 123,
  user: { id: '1', userName: '123', role: [UserRoles.ADMIN] },
  blocks: [],
  type: [],
  title: '123',
  subtitle: 'asfsa',
}

export default {
  title: 'features/ArticleRecomendationsList',
  component: ArticleRecomendationsList,
  decorators: [withMock]
} as ComponentMeta<typeof ArticleRecomendationsList>

const Template: ComponentStory<typeof ArticleRecomendationsList> = (args) => < ArticleRecomendationsList {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/articles?_limit=3`,
      method: 'GET',
      status: 200,
      response: [
        { ...article, id: '1' },
        { ...article, id: '2' },
        { ...article, id: '3' },
      ],
    },
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'Уведомление',
          description: 'Текст уведомления'
        },
        {
          id: '2',
          title: 'Уведомление 2',
          description: 'Текст уведомления 2'
        },
        {
          id: '3',
          title: 'Уведомление 3',
          description: 'Текст уведомления 3'
        },
      ],
    },
  ],
}
