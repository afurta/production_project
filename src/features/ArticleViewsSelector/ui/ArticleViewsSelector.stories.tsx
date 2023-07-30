import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ArticleViewsSelector } from './ArticleViewsSelector'

export default {
  title: 'entities/ArticleViewsSelector',
  component: ArticleViewsSelector
} as ComponentMeta<typeof ArticleViewsSelector>

const Template: ComponentStory<typeof ArticleViewsSelector> = (args) => (
  <ArticleViewsSelector {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
