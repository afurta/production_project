import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NotificationBtn } from './NotificationBtn'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/NotificationBtn',
  component: NotificationBtn
} as ComponentMeta<typeof NotificationBtn>

const Template: ComponentStory<typeof NotificationBtn> = (args) => (
  <NotificationBtn {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
Normal.parameters = {
  mockData: [
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
        }
      ]
    }
  ]
}

export const isError = Template.bind({})
isError.args = {}
isError.decorators = [StoreDecorator({})]
isError.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 400
    }
  ]
}
