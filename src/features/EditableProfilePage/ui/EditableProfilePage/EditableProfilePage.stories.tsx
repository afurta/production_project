import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EditableProfilePage } from './EditableProfilePage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/EditableProfilePage/EditableProfilePage',
  component: EditableProfilePage,
} as ComponentMeta<typeof EditableProfilePage>

const Template: ComponentStory<typeof EditableProfilePage> = (args) => < EditableProfilePage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
