import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CurrencySelect } from './CurrencySelect'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect
} as ComponentMeta<typeof CurrencySelect>

const Template: ComponentStory<typeof CurrencySelect> = (args) => (
  <CurrencySelect {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}

Normal.decorators = [StoreDecorator({})]
