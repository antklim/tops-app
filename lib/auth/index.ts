import { type FC } from 'react'
import * as devAuth from './dev'
import * as magicAuth from './magic'

export type LoginMethod = 'email'

export interface LoginProps {
  method: LoginMethod
  email: string
}

export interface UserInfo {
  email: string
}

export interface Auth {
  Component?: FC
  isSignedIn: () => Promise<boolean>
  getInfo: () => Promise<UserInfo>
  signIn: (props: LoginProps) => Promise<void>
  signOut: () => Promise<void>
}

export const auth = (): Auth => (process.env.EXPO_PUBLIC_AUTH_API_KEY ? magicAuth : devAuth)

export { useUserInfo } from './authHooks'
