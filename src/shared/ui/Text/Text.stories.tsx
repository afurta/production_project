import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Text, TextTheme } from './Text'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Title',
  text: 'Text',
}

export const Error = Template.bind({})
Error.args = {
  title: 'Title',
  text: 'Text',
  theme: TextTheme.ERROR
}

export const withTitle = Template.bind({})
withTitle.args = {
  title: 'Title',
}

export const withText = Template.bind({})
withText.args = {
  text: 'Text',
}

export const DefaultDark = Template.bind({})
DefaultDark.args = {
  title: 'Title',
  text: 'Text',
}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ErrorDark = Template.bind({})
ErrorDark.args = {
  title: 'Title',
  text: 'Text',
  theme: TextTheme.ERROR
}
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)]
