import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ProfileCard } from './ProfileCard'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import avatar from '../../../shared/assets/test/storybook.jpg'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
)

export const Normal = Template.bind({})
Normal.args = {
  data: {
    first: 'ffdsf',
    lastname: 'Ульбиdfs',
    age: 344,
    currency: Currency.EUR,
    country: Country.Armenia,
    city: 'fdsaf',
    username: 'admin',
    avatar
  },
  readonly: true
}

export const Error = Template.bind({})
Error.args = {
  isError: 'f'
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true
}

export const Readonly = Template.bind({})
Readonly.args = {
  readonly: false
}
