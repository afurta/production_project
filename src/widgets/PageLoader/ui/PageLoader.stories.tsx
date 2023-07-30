import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PageLoader } from './PageLoader'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/types/theme'

export default {
  title: 'widgets/PageLoader',
  component: PageLoader
} as ComponentMeta<typeof PageLoader>

const Template: ComponentStory<typeof PageLoader> = (args) => (
  <PageLoader {...args} />
)

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Light.decorators = [ThemeDecorator(Theme.DARK)]
