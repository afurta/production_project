import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AdditionalInfo } from './AdditionalInfo'

export default {
  title: 'shared/AdditionalInfo',
  component: AdditionalInfo
} as ComponentMeta<typeof AdditionalInfo>

const Template: ComponentStory<typeof AdditionalInfo> = (args) => (
  <AdditionalInfo {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
