import { DeepPartial } from '@reduxjs/toolkit'
import { StoreSchema } from 'app/providers/StoreProvider'
import { getAuthIsLoading } from './getAuthIsLoading'

describe('GetAuthIsLoading selector', ()=>{
  it('Check loading state', ()=>{
    const state:DeepPartial<StoreSchema> = {
      auth:{
        isLoading: true
      }
    } 
    expect(getAuthIsLoading(state)).toEqual(true)
  })

  it('Check undefined filed', ()=>{
    const state:DeepPartial<StoreSchema> = {} 
    expect(getAuthIsLoading(state)).toEqual(false)
  })

})
