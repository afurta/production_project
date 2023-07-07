import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Page } from '@/widgets/Page'

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)

  return (
    <Page >
      {isEdit ? `Редактировать статью${id}` : 'Создание новой статьи'}
    </Page>
  )
}
export default ArticleEditPage
