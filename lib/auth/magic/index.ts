import { magic } from './client'
import { LoginProps } from '..'

export { magic } from './client'

export const isLoggedIn = async () => await magic.user.isLoggedIn()

export const getInfo = async () => await magic.user.getInfo()

export const login = async ({ email }: LoginProps) => {
  await magic.auth.loginWithMagicLink({ email })
}

export const logout = async () => {
  await magic.user.logout()
}
