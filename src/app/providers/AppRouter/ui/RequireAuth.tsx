import { getUserAuthData, getUserRoles } from '@/entities/User'
import { UserRoles } from '@/entities/User/model/consts'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { getForbiddenRoute, getMainRoute } from '@/shared/constants/router'

interface RequireAuthProps {
  children: JSX.Element
  roles?: UserRoles[]
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
  const auth = useSelector(getUserAuthData)
  const userRoles = useSelector(getUserRoles)
  const location = useLocation()

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true
    }

    return roles.some((requiredRole) => {
      const hasRole = userRoles?.includes(requiredRole)
      return hasRole
    })
  }, [roles, userRoles])

  if (!auth) {
    return <Navigate to={getMainRoute()} state={{ from: location }} replace />
  }

  if (!hasRequiredRoles) {
    return (
      <Navigate to={getForbiddenRoute()} state={{ from: location }} replace />
    )
  }

  return children
}
