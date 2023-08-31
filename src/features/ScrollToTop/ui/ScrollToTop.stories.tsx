import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ScrollToolbar } from './ScrollToTop'

export default {
  title: 'shared/ScrollToolbar',
  component: ScrollToolbar
} as ComponentMeta<typeof ScrollToolbar>

const Template: ComponentStory<typeof ScrollToolbar> = (args) => (
  <ScrollToolbar {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
