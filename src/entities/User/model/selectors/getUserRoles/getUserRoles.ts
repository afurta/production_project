import { StoreSchema } from '@/app/providers/StoreProvider'
import { createSelector } from '@reduxjs/toolkit'
import { UserRoles } from '../../../model/consts'

export const getUserRoles = (state:StoreSchema) => state.user.authData?.role

export const isUserAdmin = createSelector(getUserRoles, roles =>  Boolean(roles?.includes(UserRoles.ADMIN)))
export const isUserManager = createSelector(getUserRoles, roles => Boolean(roles?.includes(UserRoles.MANAGER)))
