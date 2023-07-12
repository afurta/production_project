import { classNames } from '@/shared/lib/classNames/classNames'
import { Flex, FlexProps } from '../Flex/Flex'

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = (props: VStackProps) => {
  const { className } = props

  return (
    <Flex
      direction='column'
      className={classNames('', {}, [className])}
      {...props}
    />

  )
}
