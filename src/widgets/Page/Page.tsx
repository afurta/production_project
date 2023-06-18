import { FC, MutableRefObject, ReactNode, UIEvent, useRef } from 'react'
import { classNames } from 'shared/lib/classNames/classnames'
import cls from './Page.module.scss'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useLocation } from 'react-router-dom'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { useSelector } from 'react-redux'
import { getScrollValueByPath } from 'features/SaveScroll/model/selectors/getScroollPosition/getScroollPosition'
import { SaveScrollActions } from 'features/SaveScroll'
import { StoreSchema } from 'app/providers/StoreProvider'
import { useThrottle } from 'shared/lib/hooks/useThrootle'

interface PageProps {
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
  const scrollPosition = useSelector((state: StoreSchema) => getScrollValueByPath(state, pathname))

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    cb: onScrollEnd
  })

  const onScrollEvent = useThrottle(
    (e: UIEvent<HTMLDivElement>) => {
      dispatch(SaveScrollActions.setScroollPosition({ path: pathname, position: e.currentTarget.scrollTop }))
    }, 500)

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition || 0
  })

  return (
    <section
      className={classNames(cls.page, {}, [className])} ref={wrapperRef}
      onScroll={onScrollEvent}
    >
      {children}
      <div ref={triggerRef} className={classNames(cls.triggerRef)} />
    </section>
  )
}


