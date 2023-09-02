import { isSignedIn, getInfo, signIn, signOut } from './magic'

export type LoginMethod = 'email'

export interface LoginProps {
  method: LoginMethod
  email: string
}

export interface UserInfo {
  email: string
}

export interface Auth {
  isSignedIn: () => Promise<boolean>
  getInfo: () => Promise<UserInfo>
  signIn: (props: LoginProps) => Promise<void>
  signOut: () => Promise<void>
}

export const auth = (): Auth => {
  // TODO: Add support for other auth providers: local auth

  return {
    isSignedIn,
    getInfo,
    signIn,
    signOut,
  }
}
