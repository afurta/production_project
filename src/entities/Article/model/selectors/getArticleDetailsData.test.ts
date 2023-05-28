import { StoreSchema } from 'app/providers/StoreProvider'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsLoading } from '../../model/selectors/getArticleDetailsData'

describe('getArticleDetailsData selector', ()=>{
  it('Check default state', ()=>{
    const data = {    
      id:'1',
      title:'title',
    }
    const state:DeepPartial<StoreSchema> = {
      articleDetails:{
        data
      }
    } 

    expect(getArticleDetailsData(state as StoreSchema)).toEqual(data)
  })

  it('Check isLoading state', ()=>{

    const state:DeepPartial<StoreSchema> = {
      articleDetails:{
        isLoading:true,
      }
    } 
    expect(getArticleDetailsLoading(state as StoreSchema)).toEqual(true)
  })

  it('Check error state', ()=>{

    const state:DeepPartial<StoreSchema> = {
      articleDetails:{
        error: 'error',
      }
    } 
    expect(getArticleDetailsError(state as StoreSchema)).toEqual('error')
  })
})
