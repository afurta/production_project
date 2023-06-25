import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchArticlesList } from '../../service/fetchArticlesList/fetchArticlesList'
import { fetchNextDataArticlePage } from './fetchNextDataArticlePage'

describe('fetchNextDataArticlePage service', () => {

  it('Success  data', async () => {
    const thunk = new TestAsyncThunk(fetchNextDataArticlePage, {
      ArticlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(4)
    expect(fetchArticlesList).toHaveBeenCalled()
  })

})
 
