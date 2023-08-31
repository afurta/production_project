import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ScrollToTopButton.module.scss'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ScrollToTop } from '@/features/ScrollToTop'

interface ScrollToTopButtonProps {
  className?: string
}

export const ScrollToTopButton = (props: ScrollToTopButtonProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <VStack
      justify="center"
      align="center"
      max
      className={classNames(cls.scrollToTopButton, {}, [className])}
    >
      <ScrollToTop />
    </VStack>
  )
}
