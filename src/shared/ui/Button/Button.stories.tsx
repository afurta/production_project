import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, ButtonSize, ButtonTheme } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text',
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Square = Template.bind({})
Square.args = {
  children: '>',
  square: true
}

export const SquareM = Template.bind({})
SquareM.args = {
  children: '>',
  square: true,
  size: ButtonSize.M,
  theme: ButtonTheme.BACKGROUND_INVERTED
}

export const SquareL = Template.bind({})
SquareL.args = {
  children: '>',
  square: true,
  size: ButtonSize.L,
  theme: ButtonTheme.BACKGROUND_INVERTED
}

export const SquareXL = Template.bind({})
SquareXL.args = {
  children: '>',
  square: true,
  size: ButtonSize.XL,
  theme: ButtonTheme.BACKGROUND_INVERTED
}

export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND
}

export const BackgroundThemeInverted = Template.bind({})
BackgroundThemeInverted.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED
}

export const SquareTextM = Template.bind({})
SquareTextM.args = {
  children: '>',
  size: ButtonSize.M,
  theme: ButtonTheme.BACKGROUND_INVERTED
}

export const SquareTextL = Template.bind({})
SquareTextL.args = {
  children: '>',
  size: ButtonSize.L,
  theme: ButtonTheme.BACKGROUND_INVERTED
}

export const SquareTextXL = Template.bind({})
SquareTextXL.args = {
  children: '>',
  size: ButtonSize.XL,
  theme: ButtonTheme.BACKGROUND_INVERTED
}
