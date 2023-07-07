import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AvatarDropdown } from './AvatarDropdown'

export default {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
} as ComponentMeta<typeof AvatarDropdown>

const Template: ComponentStory<typeof AvatarDropdown> = (args) => < AvatarDropdown {...args} />

export const Normal = Template.bind({})
Normal.args = {

}
