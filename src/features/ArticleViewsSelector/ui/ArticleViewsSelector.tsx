import { ArticleView } from '@/entities/Article'
import { ICONS, ICONS_NEW } from '@/shared/assets'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeature, toggleFeature } from '@/shared/lib/features'
import {
  Button as ButtonDeprecated,
  ButtonTheme
} from '@/shared/ui/deprecated/Button'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { Card } from '@/shared/ui/redesigned/Card'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { FC } from 'react'
import cls from './ArticleViewsSelector.module.scss'
import { HStack } from '@/shared/ui/redesigned/Stack'

interface ArticleViewsSelectorProps {
  className?: string
  view: ArticleView
  onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.GRID,
    Icon: toggleFeature({
      name: 'isAppRedesigned',
      on: () => ICONS_NEW.Tile,
      off: () => ICONS.Grid
    })
  },
  {
    view: ArticleView.LIST,
    Icon: toggleFeature({
      name: 'isAppRedesigned',
      on: () => ICONS_NEW.Burger,
      off: () => ICONS.List
    })
  }
]

export const ArticleViewsSelector: FC<ArticleViewsSelectorProps> = (props) => {
  const { className, view, onViewClick } = props

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView)
  }
  return (
    <ToggleFeature
      feature="isAppRedesigned"
      on={
        <Card
          className={classNames(cls.articleViewsSelectorRedesigned, {}, [
            className
          ])}
          border="partial"
        >
          <HStack gap={8}>
            {viewTypes.map((viewType) => (
              <Icon
                Svg={viewType.Icon}
                className={classNames('', {
                  [cls.notSelected]: viewType.view !== view
                })}
                clickable
                onClick={onClick(viewType.view)}
              />
            ))}
          </HStack>
        </Card>
      }
      off={
        <div className={classNames(cls.articleViewsSelector, {}, [className])}>
          {viewTypes.map((viewType) => (
            <ButtonDeprecated
              theme={ButtonTheme.CLEAR}
              onClick={onClick(viewType.view)}
              key={viewType.view}
            >
              <IconDeprecated
                Svg={viewType.Icon}
                className={classNames('', {
                  [cls.notSelected]: viewType.view !== view
                })}
                width={24}
                height={24}
              />
            </ButtonDeprecated>
          ))}
        </div>
      }
    />
  )
}
