import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { getArticleDetailsData } from '@/entities/Article'
import { Comment } from '@/entities/Comment'
import { getUserAuthData } from '@/entities/User'
import { fetchCommentsArticleById } from '../commentsArticleById/commentsArticleById'

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>('ArticleDetails/addCommentForArticle', async (text, thunkApi) => {
  const { extra, rejectWithValue, dispatch, getState } = thunkApi

  const userData = getUserAuthData(getState())
  const article = getArticleDetailsData(getState())

  if (!text || !userData || !article) {
    return rejectWithValue('send error')
  }

  try {
    const response = await extra.api.post<Comment>('/comments', {
      articleId: article.id,
      userId: userData.id,
      text
    })

    if (!response.data) {
      throw new Error()
    }

    dispatch(fetchCommentsArticleById(article.id))

    return response.data
  } catch (e) {
    return rejectWithValue('error')
  }
})
