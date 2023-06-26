import { ComponentStory, ComponentMeta } from '@storybook/react'
import Forbidden from './Forbidden'

export default {
  title: 'shared/Forbidden',
  component: Forbidden,
} as ComponentMeta<typeof Forbidden>

const Template: ComponentStory<typeof Forbidden> = (args) => < Forbidden {...args} />

export const Normal = Template.bind({})
Normal.args = {

}
