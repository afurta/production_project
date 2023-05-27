import { ComponentStory, ComponentMeta } from '@storybook/react'
import AvatarImg from './storybook.jpg'

import { Avatar, } from './Avatar'

export default {
  title: 'shared/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  alt: 'alt',
  src: AvatarImg,
}
