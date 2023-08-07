import { ReactElement, memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './MainLayout.module.scss'

interface MainLayoutProps {
  className?: string
  content?: ReactElement
  sidebar?: ReactElement
  header?: ReactElement
  toolbar?: ReactElement
}

export const MainLayout = memo((props: MainLayoutProps) => {
  const { className, content, sidebar, header, toolbar } = props

  return (
    <div className={classNames(cls.mainLayout, {}, [className])}>
      <div className={classNames(cls.sidebar)}>{sidebar}</div>
      <div className={classNames(cls.content)}>{content}</div>
      <div className={classNames(cls.rightbar)}>
        <div className={classNames(cls.header)}>{header}</div>
        <div className={classNames(cls.toolbar)}>{toolbar}</div>
      </div>
    </div>
  )
})
