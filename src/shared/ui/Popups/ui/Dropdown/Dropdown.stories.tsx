import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { action } from '@storybook/addon-actions'
import { ICONS } from '@/shared/assets'

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  decorators: [
    Story => <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}
    ><Story /></div>
  ]
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => < Dropdown {...args} />

export const BottomRight = Template.bind({})
BottomRight.args = {
  control: <ICONS.User width='32' height='32' />,
  items: [
    { onClick: action('itemClick'), content: 'content1' },
    { href: '', content: 'content2' }
  ],
  direction: 'bottom right'
}

export const BottomLeft = Template.bind({})
BottomLeft.args = {
  control: <ICONS.User width='32' height='32' />,
  items: [
    { onClick: action('itemClick'), content: 'content1' },
    { href: '', content: 'content2' }
  ],
  direction: 'bottom left'
}

export const TopRight = Template.bind({})
TopRight.args = {
  control: <ICONS.User width='32' height='32' />,
  items: [
    { onClick: action('itemClick'), content: 'content1' },
    { href: '', content: 'content2' }
  ],
  direction: 'top right'
}

export const TopLeft = Template.bind({})
TopLeft.args = {
  control: <ICONS.User width='32' height='32' />,
  items: [
    { onClick: action('itemClick'), content: 'content1' },
    { href: '', content: 'content2' }
  ],
  direction: 'top left'
}
