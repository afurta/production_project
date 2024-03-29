export { initAuthData } from './model/services/initAuthData'

export type { JsonSettings } from './model/types/JsonSettings'
export { saveJsonSettings } from './model/services/saveJsonSettings'

export { useJsonSettings } from './model/selectors/getJsonSettings'

export { UserRoles } from './model/consts'

export { getUserRoles } from './model/selectors/getUserRoles/getUserRoles'

export {
  isUserAdmin,
  isUserManager
} from './model/selectors/getUserRoles/getUserRoles'

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'

export { getUserInitedState } from './model/selectors/getUserInitedState/getUserInitedState'

export type { UserSchema, User } from './model/types/UserSchema'
export { UserReducer, UserActions } from './model/slice/UserSlice'
