import { addDecorator } from '@storybook/react'
import {RouterDecorator} from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import {ThemeDecorator} from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {StyleDecorator} from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import {SuspenseDecorator} from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'

import { Theme } from '../../src/shared/types/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: 'LIGHT',
    list: [
      { name: 'LIGTH', class: Theme.LIGHT, color: '#00aced' },
      { name: 'DARK', class: Theme.DARK, color: '#0232c2' },
      { name: 'ORANGE', class: Theme.ORANGE, color: '#bd5012' }
    ],
  },
}

addDecorator(StyleDecorator)
addDecorator(RouterDecorator)
addDecorator(SuspenseDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))


