import { CounterSchema } from 'entities/Counter'
import { UserSchema } from 'entities/User'
import { AuthSchema } from 'features/AuthByUsername'

export interface StoreSchema{
  counter: CounterSchema
  user: UserSchema
  auth?: AuthSchema
}
