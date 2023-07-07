import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from '@/app/providers/ThemeProvider'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Sidebar } from './Sidebar'

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <div style={{ height: '100vh', display: 'flex' }}><Sidebar {...args} /></div>

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  user: {
    authData: {
      id: '1',
      userName: 'username'
    }
  }
})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: {
    authData: {
      id: '1',
      userName: 'username'
    }
  }
})]

export const isNotAuth = Template.bind({})
isNotAuth.args = {}
isNotAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: {
    authData: undefined
  }
})]
