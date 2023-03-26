import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema'
import { DeepPartial } from '@reduxjs/toolkit'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue fn', ()=>{
  test('getCounterValue get data', ()=>{
    const store: DeepPartial<StoreSchema> = {
      counter:{
        value:10
      }
    }  
    expect(getCounterValue(store as StoreSchema)).toEqual(10)
  })
  test('getCounterValue increment fn', ()=>{
    const store: DeepPartial<StoreSchema> = {
      counter:{
        value:10
      }
    }  
    expect(getCounterValue(store as StoreSchema)).toEqual(10)
  })
})
