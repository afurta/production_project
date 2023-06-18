import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CommentCard } from './CommentCard'

export default {
  title: 'entities/CommentCard',
  component: CommentCard,
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => < CommentCard {...args} />

export const Normal = Template.bind({})
Normal.args = {

}
