import { StoreSchema } from '@/app/providers/StoreProvider'
import { getAuthIsLoading } from './getAuthIsLoading'

describe('GetAuthIsLoading selector', ()=>{
  it('Check loading state', ()=>{
    const state:DeepPartial<StoreSchema> = {
      loginForm:{
        isLoading: true
      }
    } 
    expect(getAuthIsLoading(state as StoreSchema)).toEqual(true)
  })

  it('Check undefined filed', ()=>{
    const state:DeepPartial<StoreSchema> = {} 
    expect(getAuthIsLoading(state as StoreSchema)).toEqual(false)
  })

})
