import { CounterSchema } from 'entities/Counter'
import { UserSchema } from 'entities/User'

export interface StoreSchema{
  counter: CounterSchema
  user: UserSchema
}
