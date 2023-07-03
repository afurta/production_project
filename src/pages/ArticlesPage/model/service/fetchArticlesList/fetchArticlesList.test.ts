import axios from 'axios'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchArticlesList } from '@/pages/ArticlesPage/model/service/fetchArticlesList/fetchArticlesList'
import { ArticleView } from '@/entities/Article'

describe('FetchArticlesList service', () => {

  // it('FetchArticlesList correct data', async () => {
  //   const thunk = new TestAsyncThunk(fetchArticlesList)
  //   const result = await thunk.callThunk({s: false, error: '', view: ArticleView.GRID, page: 1, ids:[], entities:{}, hasMore: true, limit: 5,})
  //   thunk.api.post.mockReturnValue(Promise.resolve({status: 403}))
  //   const result = await thunk.callThunk({username: '123', password: '123'})

  //   expect(thunk.dispatch).toHaveBeenCalledTimes(2)
  //   expect(thunk.api.post).toHaveBeenCalledTimes(1)
  //   expect(result.meta.requestStatus).toBe('rejected')
  //   expect(result.payload).toBe('error')
  // })

})
 
