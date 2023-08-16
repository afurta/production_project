import { FeauresFlags } from '@/shared/types/featureFlag'
import { UserRoles } from '../../model/consts'
import { JsonSettings } from '@/entities/User/model/types/JsonSettings'

export interface User {
  id: string
  username: string
  avatar?: string
  role: UserRoles[]
  features?: FeauresFlags
  jsonSettings?: JsonSettings
}

export interface UserSchema {
  authData?: User
  _inited?: boolean
}
