import { StoreSchema } from 'app/providers/StoreProvider'

export const getCommentFormText = (store: StoreSchema) => store.CommentForm?.text ?? ''
export const getCommentFormError = (store: StoreSchema) => store.CommentForm?.error
