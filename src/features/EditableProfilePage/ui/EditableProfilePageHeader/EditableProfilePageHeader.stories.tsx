import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EditableProfilePageHeader } from './EditableProfilePageHeader'

export default {
  title: 'shared/EditableProfilePageHeader',
  component: EditableProfilePageHeader,
} as ComponentMeta<typeof EditableProfilePageHeader>

const Template: ComponentStory<typeof EditableProfilePageHeader> = (args) => < EditableProfilePageHeader {...args} />

export const Normal = Template.bind({})
Normal.args = {

}
