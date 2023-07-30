import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EditableProfilePageHeader } from './EditableProfilePageHeader'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/EditableProfilePage/EditableProfilePageHeader',
  component: EditableProfilePageHeader
} as ComponentMeta<typeof EditableProfilePageHeader>

const Template: ComponentStory<typeof EditableProfilePageHeader> = (args) => (
  <EditableProfilePageHeader {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
