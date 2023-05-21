import { counterActions, counterReducer } from 'entities/Counter/model/slice/CounterSlice'
import { CounterSchema } from 'entities/Counter'

describe('CounterSlice', () => {

  test('CounterSlice increment', () => {
    const store: DeepPartial<CounterSchema> = {
      value:10
    }  
    expect(counterReducer(store as CounterSchema, counterActions.increment())).toEqual({value:11})
  })

  test('CounterSlice decrement', () => {
    const store: DeepPartial<CounterSchema> = {
      value:10
    }  
    expect(counterReducer(store as CounterSchema, counterActions.decrement())).toEqual({value:9})
  })

  test('CounterSlice undefined', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({value:1})
  })

})
