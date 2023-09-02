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
        content: t('возрастанию')
      },
      {
        value: 'desc',
        content: t('убыванию')
      }
    ],
    [t]
  )

  const sortOptions = useMemo<SelectOption<ArticleSortFields>[]>(
    () => [
      {
        content: t('По заголовку'),
        value: ArticleSortFields.TITLE
      },
      {
        content: t('По дате создания'),
        value: ArticleSortFields.CREATED_AT
      },
      {
        content: t('По просмотрам'),
        value: ArticleSortFields.VIEWS
      }
    ],
    [t]
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
              defaultValue={t('Фильтр 1')}
              value={sort}
              onChange={onChangeSortField}
            />
            <ListBox
              items={orderOptions}
              defaultValue={t('Фильтр 2')}
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
              label={t('Сортировать по:')}
              value={sort}
              options={sortOptions}
              onChange={onChangeSortField}
            />
            <Select
              className={classNames(cls.typeOrderSort)}
              label={t('по') + ':'}
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
