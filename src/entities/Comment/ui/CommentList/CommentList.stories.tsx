import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CommentList } from './CommentList'

export default {
  title: 'entities/CommentList',
  component: CommentList,
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => < CommentList {...args} />

export const Normal = Template.bind({})
Normal.args = {
  data: [
    {
      id: '1',
      text: 'text1',
      user: { id: '1', username: 'username1' }
    },
    {
      id: '2',
      text: '2',
      user: { id: '2', username: 'username2' }
    }
  ],
  isLoading: false
}

export const noComments = Template.bind({})
noComments.args = {
  data: [],
  isLoading: false
}

export const isLoading = Template.bind({})
isLoading.args = {
  data: [{}],
  isLoading: true
}
