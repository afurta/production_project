import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Loader } from './Loader'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/types/theme'

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = () => <Loader />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
