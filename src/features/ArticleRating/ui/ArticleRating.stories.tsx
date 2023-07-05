import { ComponentStory, ComponentMeta } from '@storybook/react'
import ArticleRating from './ArticleRating'

export default {
  title: 'shared/ArticleRating',
  component: ArticleRating,
} as ComponentMeta<typeof ArticleRating>

const Template: ComponentStory<typeof ArticleRating> = (args) => < ArticleRating {...args} />

export const Normal = Template.bind({})
Normal.args = {

}
