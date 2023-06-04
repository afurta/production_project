import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CommentList } from './CommentList'

export default {
  title: 'entities/CommentList',
  component: CommentList,
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => < CommentList {...args} />

export const Normal = Template.bind({})
Normal.args = {
  // comments: [
  //   {
  //     id: 'ads1',
  //     text: 'adsf1'
  //     user: { id: '1', username: 'username1' }
  //   },
  //   {
  //     id: 'ads2',
  //     text: 'adsf2'
  //     user: { id: '2', username: 'username2' }
  //   }
  // ]
}
