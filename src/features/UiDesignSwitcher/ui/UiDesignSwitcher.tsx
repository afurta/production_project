import { getUserAuthData } from '@/entities/User'
import { getFeatureFlag, updateFeatureFlags } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

export const UiDesignSwitcher = memo(() => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const authData = useSelector(getUserAuthData)

  const items = [
    {
      value: 'new',
      content: 'new'
    },
    {
      value: 'old',
      content: 'old'
    }
  ]

  const isAppRedesigned = getFeatureFlag('isAppRedesigned')

  const onChange = (value: string) => {
    if (authData) {
      dispatch(
        updateFeatureFlags({
          userId: authData.id,
          newFeatures: {
            isAppRedesigned: value === 'new'
          }
        })
      )
    }
  }
  return (
    <HStack gap={24}>
      <Text text={'Вариант интерфейса'} />
      <ListBox
        items={items}
        onChange={onChange}
        value={isAppRedesigned ? 'new' : 'old'}
      />
    </HStack>
  )
})
