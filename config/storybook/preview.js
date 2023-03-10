import { addDecorator } from '@storybook/react'
import {RouterDecorator} from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import {ThemeDecorator} from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {StyleDecorator} from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'

import { Theme } from 'app/providers/ThemeProvider'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(StyleDecorator)
addDecorator(RouterDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))


