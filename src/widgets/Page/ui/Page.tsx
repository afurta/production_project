import { StoreSchema } from '@/app/providers/StoreProvider'
import { SaveScrollActions } from '@/features/SaveScroll'
import { getScrollValueByPath } from '@/features/SaveScroll'
import { classNames } from '@/shared/lib/classNames/classNames'
import { toggleFeature } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect'
import { useThrottle } from '@/shared/lib/hooks/useThrootle'
import { TestsProps } from '@/shared/types/tests'
import { FC, MutableRefObject, ReactNode, UIEvent, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import cls from './Page.module.scss'

interface PageProps extends TestsProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page: FC<PageProps> = (props) => {
  const { className, children, onScrollEnd } = props
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const scrollPosition = useSelector((state: StoreSchema) =>
    getScrollValueByPath(state, pathname)
  )

  useInfiniteScroll({
    triggerRef,
    wrapperRef: toggleFeature({
      name: 'isAppRedesigned',
      on: () => undefined,
      off: () => wrapperRef
    }),
    cb: onScrollEnd
  })

  const onScrollEvent = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      SaveScrollActions.setScroollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop
      })
    )
  }, 500)

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition || 0
  })

  return (
    <main
      className={classNames(
        toggleFeature({
          name: 'isAppRedesigned',
          on: () => cls.pageRedesigned,
          off: () => cls.page
        }),
        {},
        [className]
      )}
      ref={wrapperRef}
      onScroll={onScrollEvent}
      data-testid={props['data-testId'] ?? 'Page'}
    >
      {children}
      <div ref={triggerRef} className={classNames(cls.triggerRef)} />
    </main>
  )
}
