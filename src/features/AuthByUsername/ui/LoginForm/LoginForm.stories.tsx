import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoginForm } from './LoginForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'features/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <div style={{ width: '300px' }}><LoginForm {...args} /></div>

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [StoreDecorator({ auth: { username: 'admin', password: '123' } })]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [StoreDecorator({ auth: { username: 'admin', password: '123' } }), ThemeDecorator(Theme.DARK)]

export const Error = Template.bind({})
Error.args = {}
Error.decorators = [StoreDecorator({ auth: { username: 'admin', password: '123', error: 'error', } })]


export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [StoreDecorator({ auth: { username: 'admin', password: '123', isLoading: true } })]
