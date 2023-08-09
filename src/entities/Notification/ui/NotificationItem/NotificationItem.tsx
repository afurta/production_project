import { classNames } from '@/shared/lib/classNames/classNames'
import { Card, CardTheme } from '@/shared/ui/deprecated/Card'
import { Text, TextAlign } from '@/shared/ui/deprecated/Text'
import { Notification } from '../../model/index'

interface NotificationItemProps {
  className?: string
  data: Notification
}

export const NotificationItem = (props: NotificationItemProps) => {
  const { className, data } = props

  const content = (
    <Card
      theme={CardTheme.OUTLINED}
      className={classNames('', {}, [className])}
    >
      <Text title={data.title} text={data.description} align={TextAlign.LEFT} />
    </Card>
  )
  if (data.href) {
    return (
      <a href={data.href} target="__blank">
        {content}
      </a>
    )
  }

  return content
}
