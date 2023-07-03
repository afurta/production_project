import type { ValidateProfileError } from '@/features/EditableProfilePage'
import { Profile } from '@/entities/ProfileCard/model/types/Profile'

export interface ProfileSchema{
  data?: Profile 
  form?: Profile 
  error?: string 
  isLoading?: boolean
  readonly?: boolean
  validateErrors?: ValidateProfileError[]
}

