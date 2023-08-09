import { FC } from 'react'
import { ICONS } from '@/shared/assets'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import cls from './ArticleViewsSelector.module.scss'
import { ArticleView } from '@/entities/Article'

interface ArticleViewsSelectorProps {
  className?: string
  view: ArticleView
  onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.GRID,
    Icon: ICONS.Grid
  },
  {
    view: ArticleView.LIST,
    Icon: ICONS.List
  }
]

export const ArticleViewsSelector: FC<ArticleViewsSelectorProps> = (props) => {
  const { className, view, onViewClick } = props

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView)
  }
  return (
    <div className={classNames(cls.articleViewsSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
          key={viewType.view}
        >
          <Icon
            Icon={viewType.Icon}
            className={classNames('', {
              [cls.selected]: viewType.view !== view
            })}
            width={24}
            height={24}
          />
        </Button>
      ))}
    </div>
  )
}
