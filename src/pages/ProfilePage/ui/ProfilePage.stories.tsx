import { ComponentStory, ComponentMeta } from '@storybook/react'

import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />

export const Normal = Template.bind({})
Normal.decorators = [StoreDecorator({
  profile: {
    data: {
      'first': 'ffdsf',
      'lastname': 'Ульбиdfs',
      'age': 344,
      'currency': Currency.EUR,
      'country': Country.Armenia,
      'city': 'fdsaf',
      'username': 'admin',
      'avatar': 'shared/assets/test/avatar.webp'
    },
    readonly: true
  }
})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    data: {
      'first': 'ffdsf',
      'lastname': 'Ульбиdfs',
      'age': 344,
      'currency': Currency.EUR,
      'country': Country.Armenia,
      'city': 'fdsaf',
      'username': 'admin',
      'avatar': 'shared/assets/test/avatar.webp'
    },
    readonly: false
  }
})]

