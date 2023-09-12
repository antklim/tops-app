import { magic } from './client'
import { type LoginProps, type AuthInfo } from '..'

export { Component } from './component'

export const isSignedIn = async () => await magic().user.isLoggedIn()

export const getInfo = async (): Promise<AuthInfo> => {
  const { email } = await magic().user.getInfo()
  return { email: email ?? '' }
}

export const signIn = async ({ email }: LoginProps) => {
  await magic().auth.loginWithEmailOTP({ email })
}

export const signOut = async () => {
  await magic().user.logout()
}
