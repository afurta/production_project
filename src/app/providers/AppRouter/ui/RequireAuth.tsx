import { getUserAuthData, getUserRoles } from 'entities/User'
import { UserRoles } from 'entities/User/model/consts'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/RouterConfig'

interface RequireAuthProps {
  children: JSX.Element
  roles?: UserRoles[]
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
  const auth = useSelector(getUserAuthData)
  const userRoles = useSelector(getUserRoles)
  const location = useLocation()

  const hasRequiredRoles = useMemo(() => {
    if (!roles) return

    return userRoles?.some((role) => roles.includes(role))
  }, [roles, userRoles])

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />
  }

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />
  }

  return children
}
