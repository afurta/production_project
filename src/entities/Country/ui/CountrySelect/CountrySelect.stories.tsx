import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CountrySelect } from './CountrySelect'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
} as ComponentMeta<typeof CountrySelect>

const Template: ComponentStory<typeof CountrySelect> = (args) => < CountrySelect {...args} />

export const Normal = Template.bind({})
Normal.args = {
}

Normal.decorators = [StoreDecorator({})]
