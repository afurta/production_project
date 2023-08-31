import { ICONS_NEW } from '@/shared/assets'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { useTranslation } from 'react-i18next'

export const ScrollToTop = () => {
  const { t } = useTranslation()

  const onClickHandler = () => window.scrollTo({ behavior: 'smooth', top: 0 })
  return (
    <Icon
      width={32}
      height={32}
      clickable
      onClick={onClickHandler}
      Svg={ICONS_NEW.CircleUp}
    />
  )
}
