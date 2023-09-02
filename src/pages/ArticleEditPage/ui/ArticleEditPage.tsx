import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Page } from '@/widgets/Page'

const ArticleEditPage = () => {
  const { t } = useTranslation('new_article')
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)

  return (
    <Page>
      {isEdit ? `Редактировать статью${id}` : t('Создание новой статьи')}
    </Page>
  )
}
export default ArticleEditPage
