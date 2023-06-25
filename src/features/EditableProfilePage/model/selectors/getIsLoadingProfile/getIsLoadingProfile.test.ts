import { StoreSchema } from 'app/providers/StoreProvider'
import { ProfileSchema, getIsLoadingProfile } from 'features/EditableProfilePage'

describe('getIsLoadingProfile selector', ()=>{
  it('Check error state', ()=>{
    const state:DeepPartial<StoreSchema> = {
      profile:{
        isLoading: true
      }
    } 

    expect(getIsLoadingProfile(state as StoreSchema)).toEqual(true)
  })

  it('Check getIsLoadingProfile undefined field', ()=>{
    const state:DeepPartial<ProfileSchema> = {
    } 
    expect(getIsLoadingProfile(state as StoreSchema)).toEqual(undefined)
  })

})
