import { magic } from './client'
import { type LoginProps, type UserInfo } from '..'

export const isSignedIn = async () => {
  console.log('magic is signed in...')
  const b = await magic.user.isLoggedIn()
  console.log({ b })
  return b
}

export const getInfo = async (): Promise<UserInfo> => {
  const { email } = await magic.user.getInfo()
  return { email: email ?? '' }
}

export const signIn = async ({ email }: LoginProps) => {
  await magic.auth.loginWithEmailOTP({ email })
}

export const signOut = async () => {
  await magic.user.logout()
}
