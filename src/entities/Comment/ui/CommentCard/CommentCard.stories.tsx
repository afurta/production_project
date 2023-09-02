import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CommentCard } from './CommentCard'
import { UserRoles } from '@/entities/User'
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'

export default {
  title: 'entities/CommentCard',
  component: CommentCard
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
)

const CommentCardNormalArgs = {
  data: {
    id: '1',
    text: 'hello world',
    user: { id: '1', username: 'Vasya', role: [UserRoles.ADMIN] }
  },
  isLoading: false
}

export const Normal = Template.bind({})
Normal.args = CommentCardNormalArgs

export const NormalRedesigned = Template.bind({})
NormalRedesigned.args = CommentCardNormalArgs
NormalRedesigned.decorators = [NewDesignDecorator]

export const isLoading = Template.bind({})
isLoading.args = {
  data: {
    id: '1',
    text: 'hello world',
    user: { id: '1', username: 'Vasya', role: [UserRoles.ADMIN] }
  },
  isLoading: true
}
