import { magic } from './client'
import { LoginProps } from '..'

export { magic } from './client'

export const isLoggedIn = async () => {
  throw new Error('Not implemented')
}

export const getInfo = async () => {
  throw new Error('Not implemented')
}

export const login = async (props: LoginProps) => {
  throw new Error('Not implemented')
}

export const logout = async () => {
  await magic.user.logout()
}
