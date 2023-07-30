import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ArticleAddCommentForm } from './ArticleAddCommentForm'
import { SuspenseDecorator } from '@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'pages/ArticleDetailsPage/ArticleAddCommentForm',
  component: ArticleAddCommentForm
} as ComponentMeta<typeof ArticleAddCommentForm>

const Template: ComponentStory<typeof ArticleAddCommentForm> = (args) => (
  <ArticleAddCommentForm {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [SuspenseDecorator, StoreDecorator({})]
