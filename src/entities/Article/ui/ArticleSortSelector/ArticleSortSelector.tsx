import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classnames'
import { SortOrder } from 'shared/types'
import { Select, SelectOption } from 'shared/ui/Select/Select'
import cls from './ArticleSortSelector.module.scss'
import { ArticleSortFields, ArticleView } from '../../model/consts'

interface ArticleSortSelectorProps {
  className?: string
  sortField: ArticleSortFields
  sortOrder: SortOrder
  view: ArticleView
  onChangeSortField: (SortField: ArticleSortFields) => void
  onChangeSortOrder: (SortOrder: SortOrder) => void
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
  const {
    className,
    sortField,
    sortOrder,
    onChangeSortField,
    onChangeSortOrder
  } = props
  const { t } = useTranslation()

  const sortOptions = useMemo<SelectOption[]>(() => [
    {
      text: 'По заголовку',
      value: ArticleSortFields.TITLE
    },
    {
      text: 'По дате создания',
      value: ArticleSortFields.CREATED_AT
    },
    {
      text: 'По просмотрам',
      value: ArticleSortFields.VIEWS
    }
  ], [])

  const orderOptions = useMemo<SelectOption[]>(() => [
    {
      value: 'asc',
      text: 'возрастанию',
    },
    {
      value: 'desc',
      text: 'убыванию',
    },
  ], [])

  return (
    <div className={classNames(cls.articleSortSelector, {}, [className])}>
      <div className={classNames(cls.selectWrapper)}>
        <Select
          className={classNames(cls.fieldSort)}
          label={'Сортировать ПО'}
          value={sortField}
          options={sortOptions}
          onChange={onChangeSortField}
        />
        <Select
          className={classNames(cls.typeOrderSort)}
          label={'по'}
          value={sortOrder}
          options={orderOptions}
          onChange={onChangeSortOrder}
        />
      </div>
    </div>
  )
}
