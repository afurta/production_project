import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RatingCard } from './RatingCard'

export default {
  title: 'shared/Rating',
  component: RatingCard
} as ComponentMeta<typeof RatingCard>

const Template: ComponentStory<typeof RatingCard> = (args) => (
  <RatingCard {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
