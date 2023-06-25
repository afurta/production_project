import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ArticleAddCommentForm } from './ArticleAddCommentForm'

export default {
  title: 'pages/ArticleDetailsPage/ArticleAddCommentForm',
  component: ArticleAddCommentForm,
} as ComponentMeta<typeof ArticleAddCommentForm>

const Template: ComponentStory<typeof ArticleAddCommentForm> = (args) => < ArticleAddCommentForm {...args} />

export const Normal = Template.bind({})
Normal.args = {

}
