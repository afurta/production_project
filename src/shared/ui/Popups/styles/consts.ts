import { DropdownDirection } from 'shared/types'
import cls from './popup.module.scss'

export const mapPopupDirection: Record<DropdownDirection, string> = {
  'top left': cls.optionsTopLeft,
  'top right': cls.optionsTopRight,
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight
}
