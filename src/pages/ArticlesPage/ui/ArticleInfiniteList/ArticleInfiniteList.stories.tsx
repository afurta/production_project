import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ArticleInfiniteList } from './ArticleInfiniteList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/types/theme'

export default {
  title: 'pages/ArticlesPage/ArticleInfiniteList',
  component: ArticleInfiniteList,
} as ComponentMeta<typeof ArticleInfiniteList>

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => < ArticleInfiniteList {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
