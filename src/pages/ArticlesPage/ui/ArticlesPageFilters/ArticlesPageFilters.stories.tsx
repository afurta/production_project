import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ArticlesPageFilters } from './ArticlesPageFilters'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/types/theme'

export default {
  title: 'pages/ArticlesPage/ArticlesPageFilters',
  component: ArticlesPageFilters,
} as ComponentMeta<typeof ArticlesPageFilters>

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => < ArticlesPageFilters {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
