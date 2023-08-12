import { classNames } from '@/shared/lib/classNames/classNames'
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card'
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'
import { Notification } from '../../model/index'
import { ToggleFeature } from '@/shared/lib/features'
import { Card } from '@/shared/ui/redesigned/Card'

interface NotificationItemProps {
  className?: string
  data: Notification
}

export const NotificationItem = (props: NotificationItemProps) => {
  const { className, data } = props

  const content = (
    <ToggleFeature
      feature="isAppRedesigned"
      on={
        <Card className={classNames('', {}, [className])}>
          <Text
            title={data.title}
            text={data.description}
            align={TextAlign.LEFT}
          />
        </Card>
      }
      off={
        <CardDeprecated
          theme={CardTheme.OUTLINED}
          className={classNames('', {}, [className])}
        >
          <TextDeprecated
            title={data.title}
            text={data.description}
            align={TextAlign.LEFT}
          />
        </CardDeprecated>
      }
    />
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
