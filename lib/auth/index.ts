import { isLoggedIn, getInfo, login, logout } from './magic'

export type LoginMethod = 'email'

export interface LoginProps {
  method: LoginMethod
  email: string
}

export interface UserInfo {
  email: string
}

export interface Auth {
  isLoggedIn: () => Promise<boolean>
  getInfo: () => Promise<UserInfo>
  login: (props: LoginProps) => Promise<void>
  logout: () => Promise<void>
}

export const auth = (): Auth => {
  // TODO: Add support for other auth providers: local auth

  return {
    isLoggedIn,
    getInfo,
    login,
    logout,
  }
}
