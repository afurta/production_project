import { ICONS } from '@/shared/assets'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Icon } from '@/shared/ui/Icon'
import { memo, useState } from 'react'
import cls from './StarRating.module.scss'

interface StarRatingProps {
  className?: string
  onSelect?: (starNumber: number) => void
  size?: number
  selectedStar?: number
}

const star = [1, 2, 3, 4, 5]

export const StarRating = memo((props: StarRatingProps) => {
  const { className, onSelect, size = 30, selectedStar = 0 } = props

  const [currentStartCount, setCurrentStartCount] =
    useState<number>(selectedStar)
  const [isSelected, setIsSelected] = useState(Boolean(selectedStar))

  const onHover = (starCount: number) => () => {
    if (!isSelected) setCurrentStartCount(starCount)
  }

  const onLeave = () => () => {
    if (!isSelected) setCurrentStartCount(0)
  }

  const onClick = (starCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starCount)
      setCurrentStartCount(starCount)
      setIsSelected(true)
    }
  }

  return (
    <div className={classNames(cls.starRating, {}, [className])}>
      {star.map((starNumber) => (
        <Icon
          className={classNames(cls.start, { [cls.selected]: isSelected }, [
            currentStartCount >= starNumber ? cls.hovered : cls.normal
          ])}
          onMouseEnter={onHover(starNumber)}
          onMouseLeave={onLeave()}
          onClick={onClick(starNumber)}
          Icon={ICONS.Star}
          key={starNumber}
          height={size}
          width={size}
          data-testid={`StarRating+${starNumber}`}
          data-selectedItem={currentStartCount >= starNumber}
        />
      ))}
    </div>
  )
})
