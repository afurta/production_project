import { classNames } from '@/shared/lib/classNames/classnames'
import { Loader } from '@/shared/ui/Loader/Loader'
import cls from './PageLoader.module.scss'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div
      className={classNames(cls.PageLoader, {}, [className])}
      data-testid='page-loader'
    >
      <Loader />
    </div>
  )
}
