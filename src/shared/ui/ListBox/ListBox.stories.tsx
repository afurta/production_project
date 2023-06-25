import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Currency } from 'entities/Currency'
import { ListBox } from './ListBox'

export default {
  title: 'shared/ListBox',
  component: ListBox,
  decorators: [
    Story => <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}
    ><Story /></div>
  ]
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => < ListBox {...args} />


export const BottomRight = Template.bind({})
BottomRight.args = {
  label: 'label',
  defaultValue: 'defaultValue',
  listItems: [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
  ],
  direction: 'bottom right'
}

export const BottomLeft = Template.bind({})
BottomLeft.args = {
  label: 'label',
  defaultValue: 'defaultValue',
  listItems: [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
  ],
  direction: 'bottom left'
}

export const TopRight = Template.bind({})
TopRight.args = {
  label: 'label',
  defaultValue: 'defaultValue',
  listItems: [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
  ],
  direction: 'top right'
}

export const TopLeft = Template.bind({})
TopLeft.args = {
  label: 'label',
  defaultValue: 'defaultValue',
  listItems: [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
  ],
  direction: 'top left'
}
