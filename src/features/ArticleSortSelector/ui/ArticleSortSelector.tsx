import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { SortOrder } from '@/shared/types/sort'
import { Select, SelectOption } from '@/shared/ui/deprecated/Select'
import cls from './ArticleSortSelector.module.scss'
import { ArticleSortFields } from '@/entities/Article'
import { ToggleFeature } from '@/shared/lib/features'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortFields
  order: SortOrder
  onChangeSortField: (SortField: ArticleSortFields) => void
  onChangeSortOrder: (SortOrder: SortOrder) => void
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
  const { className, sort, order, onChangeSortField, onChangeSortOrder } = props
  const { t } = useTranslation()

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: 'возрастанию'
      },
      {
        value: 'desc',
        content: 'убыванию'
      }
    ],
    []
  )

  const sortOptions = useMemo<SelectOption<ArticleSortFields>[]>(
    () => [
      {
        content: 'По заголовку',
        value: ArticleSortFields.TITLE
      },
      {
        content: 'По дате создания',
        value: ArticleSortFields.CREATED_AT
      },
      {
        content: 'По просмотрам',
        value: ArticleSortFields.VIEWS
      }
    ],
    []
  )

  return (
    <ToggleFeature
      feature="isAppRedesigned"
      on={
        <div
          className={classNames(cls.articleSortSelectorRedesigned, {}, [
            className
          ])}
        >
          <VStack gap={8} align="start">
            <Text text={t('Сортировать по:')} />
            <ListBox
              items={sortOptions}
              defaultValue={t('Выберите нужный фильтр')}
              value={sort}
              onChange={onChangeSortField}
            />
            <ListBox
              items={orderOptions}
              defaultValue={t('Выберите нужный фильтр')}
              value={order}
              onChange={onChangeSortOrder}
            />
          </VStack>
        </div>
      }
      off={
        <div className={classNames(cls.articleSortSelector, {}, [className])}>
          <div className={classNames(cls.selectWrapper)}>
            <Select
              className={classNames(cls.fieldSort)}
              label={'Сортировать ПО'}
              value={sort}
              options={sortOptions}
              onChange={onChangeSortField}
            />
            <Select
              className={classNames(cls.typeOrderSort)}
              label={'по'}
              value={order}
              options={orderOptions}
              onChange={onChangeSortOrder}
            />
          </div>
        </div>
      }
    />
  )
}
