import { classNames } from '@/shared/lib/classNames/classnames'
import { Flex, FlexProps } from '@/shared/ui/Stack/Flex/Flex'

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
