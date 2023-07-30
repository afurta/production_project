import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Flex } from './Flex'

export default {
  title: 'shared/Flex',
  component: Flex
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />

export const Row = Template.bind({})
Row.args = {
  children: (
    <>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
    </>
  )
}

export const Column = Template.bind({})
Column.args = {
  direction: 'column',
  children: (
    <>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
    </>
  )
}

export const RowJustifyCenter = Template.bind({})
RowJustifyCenter.args = {
  direction: 'row',
  justify: 'center',
  children: (
    <>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
    </>
  )
}

export const RowJustifyStart = Template.bind({})
RowJustifyStart.args = {
  direction: 'row',
  justify: 'start',
  children: (
    <>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
    </>
  )
}

export const RowJustifyEnd = Template.bind({})
RowJustifyEnd.args = {
  direction: 'row',
  justify: 'end',
  children: (
    <>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
    </>
  )
}

export const RowAlignBetween = Template.bind({})
RowAlignBetween.args = {
  direction: 'row',
  align: 'between',
  children: (
    <>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
    </>
  )
}

export const RowAlignStart = Template.bind({})
RowAlignStart.args = {
  direction: 'row',
  align: 'start',
  children: (
    <>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
    </>
  )
}

export const RowAlignEnd = Template.bind({})
RowAlignEnd.args = {
  direction: 'row',
  align: 'end',
  children: (
    <>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
    </>
  )
}

export const RowAlignCenter = Template.bind({})
RowAlignCenter.args = {
  direction: 'row',
  align: 'center',
  children: (
    <>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
    </>
  )
}

export const RowAlignAround = Template.bind({})
RowAlignAround.args = {
  direction: 'row',
  align: 'around',
  children: (
    <>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
      <div>DIV</div>
    </>
  )
}

export const RowGap4 = Template.bind({})
RowGap4.args = {
  direction: 'row',
  gap: 4,
  children: (
    <>
      <div style={{ border: '1px solid red' }}>DIV</div>
      <div style={{ border: '1px solid red' }}>DIV</div>
      <div style={{ border: '1px solid red' }}>DIV</div>
      <div style={{ border: '1px solid red' }}>DIV</div>
      <div style={{ border: '1px solid red' }}>DIV</div>
    </>
  )
}

export const RowGap8 = Template.bind({})
RowGap8.args = {
  direction: 'row',
  gap: 8,
  children: (
    <>
      <div style={{ border: '1px solid red' }}>DIV</div>
      <div style={{ border: '1px solid red' }}>DIV</div>
      <div style={{ border: '1px solid red' }}>DIV</div>
      <div style={{ border: '1px solid red' }}>DIV</div>
      <div style={{ border: '1px solid red' }}>DIV</div>
    </>
  )
}

export const RowGap16 = Template.bind({})
RowGap16.args = {
  direction: 'row',
  gap: 16,
  children: (
    <>
      <div style={{ border: '1px solid red' }}>DIV</div>
      <div style={{ border: '1px solid red' }}>DIV</div>
      <div style={{ border: '1px solid red' }}>DIV</div>
      <div style={{ border: '1px solid red' }}>DIV</div>
      <div style={{ border: '1px solid red' }}>DIV</div>
    </>
  )
}

export const RowGap32 = Template.bind({})
RowGap32.args = {
  direction: 'row',
  gap: 32,
  children: (
    <>
      <div style={{ border: '1px solid red' }}>DIV</div>
      <div style={{ border: '1px solid red' }}>DIV</div>
      <div style={{ border: '1px solid red' }}>DIV</div>
      <div style={{ border: '1px solid red' }}>DIV</div>
      <div style={{ border: '1px solid red' }}>DIV</div>
    </>
  )
}
