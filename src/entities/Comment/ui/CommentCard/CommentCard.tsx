import { getProfileRoute } from '@/shared/constants/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text'
import { Comment } from '../../model/types/comment'
import cls from './CommentCard.module.scss'
import { ToggleFeature, toggleFeature } from '@/shared/lib/features'
import { Card } from '@/shared/ui/redesigned/Card'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Text } from '@/shared/ui/redesigned/Text'

interface CommentCardProps {
  className?: string
  data: Comment
  isLoading?: boolean
}

export const CommentCard = (props: CommentCardProps) => {
  const { className, data, isLoading } = props

  const Skeleton = toggleFeature({
    name: 'isAppRedesigned',
    on: () => SkeletonDeprecated,
    off: () => SkeletonRedesigned
  })

  if (isLoading) {
    return (
      <VStack
        className={classNames(cls.commentCard, {}, [className])}
        gap={8}
        max
        align="start"
      >
        <HStack>
          <Skeleton
            width={30}
            height={30}
            border="50%"
            className={classNames(cls.AvatarSkeleton)}
          />
          <Skeleton width={100} height={30} />
        </HStack>
        <Skeleton
          width={'100%'}
          height={30}
          className={classNames(cls.TextSkeleton)}
        />
      </VStack>
    )
  }

  return (
    <ToggleFeature
      feature="isAppRedesigned"
      on={
        <Card border="round" padding={24} max>
          <VStack
            className={classNames(cls.commentCardRedesigned, {}, [className])}
            gap={8}
            align="start"
          >
            <AppLink
              className={classNames(cls.userContainer)}
              to={getProfileRoute(data.user.id)}
            >
              <HStack gap={8}>
                {data.user.avatar ? (
                  <Avatar
                    className={classNames(cls.avatar)}
                    size={30}
                    src={data.user.avatar}
                  />
                ) : null}
                <Text title={data.user.username} />
              </HStack>
            </AppLink>
            <Text
              text={data.text}
              className={classNames(cls.text)}
              align={TextAlign.LEFT}
            />
          </VStack>
        </Card>
      }
      off={
        <VStack
          className={classNames(cls.commentCard, {}, [className])}
          gap={8}
        >
          <AppLinkDeprecated
            className={classNames(cls.userContainer)}
            to={getProfileRoute(data.user.id)}
          >
            {data.user.avatar ? (
              <AvatarDeprecated
                className={classNames(cls.avatar)}
                size={30}
                src={data.user.avatar}
              />
            ) : null}
            <TextDeprecated title={data.user.username} />
          </AppLinkDeprecated>
          <TextDeprecated
            text={data.text}
            className={classNames(cls.text)}
            align={TextAlign.LEFT}
          />
        </VStack>
      }
    />
  )
}
