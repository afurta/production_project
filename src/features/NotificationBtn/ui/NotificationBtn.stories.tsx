import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NotificationBtn } from './NotificationBtn'

export default {
  title: 'features/NotificationBtn',
  component: NotificationBtn,
} as ComponentMeta<typeof NotificationBtn>

const Template: ComponentStory<typeof NotificationBtn> = (args) => < NotificationBtn {...args} />

export const Normal = Template.bind({})
Normal.args = {

}
