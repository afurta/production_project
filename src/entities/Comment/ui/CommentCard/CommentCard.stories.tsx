import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CommentCard } from './CommentCard'

export default {
  title: 'entities/CommentCard',
  component: CommentCard,
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => < CommentCard {...args} />

export const Normal = Template.bind({})
Normal.args = {
  data: {
    id: '1',
    text: 'hello world',
    user: { id: '1', username: 'Vasya' },
  },
  isLoading: false
}

export const isLoading = Template.bind({})
isLoading.args = {
  data: {
    id: '1',
    text: 'hello world',
    user: { id: '1', username: 'Vasya' },
  },
  isLoading: true
}
