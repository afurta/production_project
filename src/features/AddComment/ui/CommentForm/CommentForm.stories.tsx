import { ComponentStory, ComponentMeta } from '@storybook/react'
import CommentForm from './CommentForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/CommentForm',
  component: CommentForm,
} as ComponentMeta<typeof CommentForm>

const Template: ComponentStory<typeof CommentForm> = (args) => < CommentForm {...args} />

export const Normal = Template.bind({})
Normal.args = {
  onSendComment: function () { }
}

Normal.decorators = [StoreDecorator({})]
