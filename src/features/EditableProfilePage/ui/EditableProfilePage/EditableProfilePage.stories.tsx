import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EditableProfilePage } from './EditableProfilePage'

export default {
  title: 'features/EditableProfilePage',
  component: EditableProfilePage,
} as ComponentMeta<typeof EditableProfilePage>

const Template: ComponentStory<typeof EditableProfilePage> = (args) => < EditableProfilePage {...args} />

export const Normal = Template.bind({})
Normal.args = {

}
