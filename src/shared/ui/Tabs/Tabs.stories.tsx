import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Tabs } from './Tabs'

export default {
  title: 'shared/Tabs',
  component: Tabs
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const Normal = Template.bind({})
Normal.args = {
  value: 'value1',
  tabs: [
    {
      value: 'value1',
      content: 'content1'
    },
    {
      value: 'value2',
      content: 'content2'
    },
    {
      value: 'value3',
      content: 'content3'
    }
  ],
  onTabClick: action('TabClick')
}
