import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Modal } from './Modal'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium earum accusamus in, a magnam nobis hic consequatur, corporis illo nam eligendi saepe error voluptates doloribus, ipsum eaque mollitia iste magni.',
  isOpen: true
}

export const Dark = Template.bind({})
Dark.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium earum accusamus in, a magnam nobis hic consequatur, corporis illo nam eligendi saepe error voluptates doloribus, ipsum eaque mollitia iste magni.',
  isOpen: true
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
