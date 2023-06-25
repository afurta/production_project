import { StoreSchema } from 'app/providers/StoreProvider'
import { UserRoles } from '../../../model/types/UserSchema'
import { createSelector } from '@reduxjs/toolkit'

export const getUserRoles = (state:StoreSchema) => state.user.authData?.role

export const isUserAdmin = createSelector(getUserRoles, roles =>  Boolean(roles?.includes(UserRoles.ADMIN)))
export const isUserManager = createSelector(getUserRoles, roles => Boolean(roles?.includes(UserRoles.MANAGER)))
