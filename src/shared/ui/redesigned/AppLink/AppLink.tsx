import { classNames } from '@/shared/lib/classNames/classNames'
import { FC } from 'react'
import { LinkProps, NavLink } from 'react-router-dom'
import cls from './AppLink.module.scss'

export type AppLinkVariant = 'primary' | 'red'

interface AppLinkProps extends LinkProps {
  className?: string
  variant?: AppLinkVariant
  activeClassName?: string
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    children,
    to,
    activeClassName = '',
    variant = 'primary',
    ...otherProps
  } = props

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(cls.AppLink, { [activeClassName]: isActive }, [
          className,
          cls[variant]
        ])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  )
}
