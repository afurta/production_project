import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Rating } from './Rating'

export default {
  title: 'shared/Rating',
  component: Rating,
} as ComponentMeta<typeof Rating>

const Template: ComponentStory<typeof Rating> = (args) => < Rating {...args} />

export const Normal = Template.bind({})
Normal.args = {

}
