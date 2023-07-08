import { classNames } from '@/shared/lib/classNames/classnames'
import { Flex, FlexProps } from '../Flex/Flex'

type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack = (props: HStackProps) => {
  const { className } = props

  return (
    <Flex
      direction='row'
      className={classNames('', {}, [className])}
      {...props}
    />

  )
}
