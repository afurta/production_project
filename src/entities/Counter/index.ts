import { CounterSchema } from './model/types/CounterSchema'
import { counterReducer } from 'entities/Counter/model/slice/CounterSlice'
import { Counter } from './ui/Counter'

export {
  Counter,
  counterReducer,
  CounterSchema
}
