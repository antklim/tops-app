import { type LoginProps, type UserInfo } from '..'

export const isSignedIn = async () => false // TODO: use test flag to set it

export const getInfo = async (): Promise<UserInfo> => ({ email: 'test@tops.app' })

export const signIn = async (props: LoginProps) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, 1000)
  })

export const signOut = async () =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, 1000)
  })
