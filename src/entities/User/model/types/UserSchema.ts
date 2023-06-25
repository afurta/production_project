export enum UserRoles{
  ADMIN = 'ADMIN' ,
  MANAGER = 'MANAGER',
  USER = 'USER'
}

export interface User{
  id: string
  userName: string  
  avatar?: string  
  role: UserRoles[]
}

export interface UserSchema{
  authData?: User
  _inited?: boolean
}
