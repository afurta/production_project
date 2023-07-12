import { ComponentStory, ComponentMeta } from '@storybook/react'

import PageError from './PageError'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/types/theme'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'pages/PageError',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageError>

const Template: ComponentStory<typeof PageError> = () => <PageError />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
