import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Icon } from './Icon'
import { ICONS } from '@/shared/assets'

export default {
  title: 'shared/Icon',
  component: Icon
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Normal = Template.bind({})
Normal.args = {
  Svg: ICONS.AboutUs
}

export const Inverted = Template.bind({})
Inverted.args = {
  Svg: ICONS.AboutUs,
  inverted: true
}
