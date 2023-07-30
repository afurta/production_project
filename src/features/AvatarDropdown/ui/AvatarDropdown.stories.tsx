import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AvatarDropdown } from './AvatarDropdown'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { UserRoles } from '@/entities/User'
import { Theme } from '@/shared/types/theme'

export default {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center'
        }}
      >
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof AvatarDropdown>

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
  <AvatarDropdown {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [
  StoreDecorator({
    user: {
      authData: {
        id: 'string',
        userName: 'string',
        avatar: 'string',
        role: [UserRoles.ADMIN]
      }
    }
  })
]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: {
      authData: {
        id: 'string',
        userName: 'string',
        avatar: 'string',
        role: [UserRoles.ADMIN]
      }
    }
  })
]
