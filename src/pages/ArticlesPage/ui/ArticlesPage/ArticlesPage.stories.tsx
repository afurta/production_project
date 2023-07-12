import { ComponentStory, ComponentMeta } from '@storybook/react'
import ArticlesPage from './ArticlesPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/types/theme'

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,

} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
