import { ComponentStory, ComponentMeta } from '@storybook/react'

import AdminPanel from './AdminPanel'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Theme } from '@/shared/types/theme'

export default {
  title: 'pages/AdminPanel',
  component: AdminPanel,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AdminPanel>

const Template: ComponentStory<typeof AdminPanel> = () => <AdminPanel />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
