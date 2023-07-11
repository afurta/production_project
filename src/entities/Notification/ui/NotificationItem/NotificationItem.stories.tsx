import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NotificationItem } from './NotificationItem'

export default {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
} as ComponentMeta<typeof NotificationItem>

const Template: ComponentStory<typeof NotificationItem> = (args) => < NotificationItem {...args} />

export const Normal = Template.bind({})
Normal.args = {
  data: {
    id: 'id',
    title: 'title',
    description: 'description',
    userId: 'userId',
    href: 'href'
  }
}
