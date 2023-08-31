import { magic } from './client'
import { type LoginProps, type UserInfo } from '..'

export const isLoggedIn = async () => await magic.user.isLoggedIn()

export const getInfo = async (): Promise<UserInfo> => {
  const { email } = await magic.user.getInfo()
  return { email: email ?? '' }
}

export const login = async ({ email }: LoginProps) => {
  await magic.auth.loginWithEmailOTP({ email })
}

export const logout = async () => {
  await magic.user.logout()
}
