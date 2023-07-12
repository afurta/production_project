import { ComponentStory, ComponentMeta } from '@storybook/react'
import ArticleEditPage from './ArticleEditPage'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/types/theme'

export default {
  title: 'pages/ArticleEditPage',
  component: ArticleEditPage,
} as ComponentMeta<typeof ArticleEditPage>

const Template: ComponentStory<typeof ArticleEditPage> = (args) => < ArticleEditPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = []

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
