import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Icon.module.scss'
import React from 'react'

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>

interface IconProps extends SvgProps {
  className?: string
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

interface NonClickableBaseProps extends IconProps {
  clickable?: false
}

interface ClickableBaseProps extends IconProps {
  clickable: true
  onClick: () => void
}

type SvgClickType = NonClickableBaseProps | ClickableBaseProps

export const Icon = (props: SvgClickType) => {
  const {
    className,
    width = 32,
    height = 32,
    Svg,
    clickable,
    ...othersProps
  } = props

  if (clickable) {
    return (
      <button style={{ width, height }}>
        <Svg
          className={classNames(cls.Icon, {}, [className])}
          width={width}
          height={height}
          {...othersProps}
          onClick={props.onClick}
        />
      </button>
    )
  }
  return (
    <Svg
      className={classNames(cls.Icon, {}, [className])}
      width={width}
      height={height}
      {...othersProps}
      onClick={undefined}
    />
  )
}
