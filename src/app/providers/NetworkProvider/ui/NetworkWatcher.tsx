import { useTranslation } from 'react-i18next'
import { useNetworkStatusContext } from './NetworkProvider'
import cls from './NetworkWatcher.module.scss'

export const NetworkWatcher = () => {
  const { t } = useTranslation()
  const { online } = useNetworkStatusContext()
  return (
    <>
      {online ? null : (
        <div className={cls.NetworkWatcher}>
          {t('Приложение работает в offline режиме')}
        </div>
      )}
    </>
  )
}
