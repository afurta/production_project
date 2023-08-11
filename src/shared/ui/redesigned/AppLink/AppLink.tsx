import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { NavLink } from 'react-router-dom'

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
