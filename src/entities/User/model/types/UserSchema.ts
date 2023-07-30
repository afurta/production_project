import { FeauresFlags } from '@/shared/types/featureFlag'
import { UserRoles } from '../../model/consts'

export interface User {
  id: string
  userName: string
  avatar?: string
  role: UserRoles[]
  features?: FeauresFlags
}

export interface UserSchema {
  authData?: User
  _inited?: boolean
}
