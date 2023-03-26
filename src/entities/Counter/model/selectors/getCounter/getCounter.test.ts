import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema'
import { DeepPartial } from '@reduxjs/toolkit'
import { getCounter } from './getCounter'

describe('GetCounter fn', ()=>{
  test('GetCounter get data', ()=>{
    const store: DeepPartial<StoreSchema> = {
      counter:{
        value:10
      }
    }  
    expect(getCounter(store as StoreSchema)).toEqual({value:10})
  })
})
