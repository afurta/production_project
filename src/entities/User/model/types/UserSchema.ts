export interface User{
  id: number
  userName: string  
  avatar?: string  
}

export interface UserSchema{
  authData?: User
  _inited?: boolean
}
