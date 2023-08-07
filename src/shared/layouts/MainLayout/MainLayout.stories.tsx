import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MainLayout } from './MainLayout'

export default {
  title: 'shared/MainLayout',
  component: MainLayout
} as ComponentMeta<typeof MainLayout>

const Template: ComponentStory<typeof MainLayout> = (args) => (
  <MainLayout {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
