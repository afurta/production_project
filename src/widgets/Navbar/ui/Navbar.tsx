import { classNames } from 'shared/lib/ClassNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {

  return (
    <div className={classNames(cls.navbar, {}, [className])} >
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          to={'/'}
          className={cls.mainLink}
        >
          Главная страница
        </AppLink>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          to={'/about'}
        >
          О нас
        </AppLink>
      </div>
    </div >
  )

}
