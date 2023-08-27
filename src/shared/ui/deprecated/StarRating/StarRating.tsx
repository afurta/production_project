import { ICONS } from '@/shared/assets'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { memo, useState } from 'react'
import cls from './StarRating.module.scss'
import { ToggleFeature, toggleFeature } from '@/shared/lib/features'
import { Icon } from '@/shared/ui/redesigned/Icon'

interface StarRatingProps {
  className?: string
  onSelect?: (starNumber: number) => void
  size?: number
  selectedStar?: number
}

const star = [1, 2, 3, 4, 5]

/**
 * @deprecated
 */
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
    <div
      className={classNames(
        toggleFeature({
          name: 'isAppRedesigned',
          on: () => cls.starRatingRedesigned,
          off: () => cls.starRating
        }),
        {},
        [className]
      )}
    >
      {star.map((starNumber) => {
        const props = {
          onMouseEnter: onHover(starNumber),
          onMouseLeave: onLeave(),
          onClick: onClick(starNumber),
          Svg: ICONS.Star,
          height: size,
          width: size,
          'data-testid': `StarRating+${starNumber}`,
          'data-selectedItem': currentStartCount >= starNumber
        }

        return (
          <ToggleFeature
            feature="isAppRedesigned"
            on={
              <Icon
                clickable={!isSelected}
                key={starNumber}
                className={classNames(
                  cls.start,
                  { [cls.selected]: isSelected },
                  [currentStartCount >= starNumber ? cls.hovered : cls.normal]
                )}
                {...props}
              />
            }
            off={
              <IconDeprecated
                key={starNumber}
                className={classNames(
                  cls.start,
                  { [cls.selected]: isSelected },
                  [currentStartCount >= starNumber ? cls.hovered : cls.normal]
                )}
                {...props}
              />
            }
          />
        )
      })}
    </div>
  )
})
