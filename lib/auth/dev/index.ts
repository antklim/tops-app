import { type LoginProps, type AuthInfo } from '..'

export const isSignedIn = async () => false // TODO: use test flag to set it

export const getInfo = async (): Promise<AuthInfo> => ({ email: 'test@tops.app' })

export const signIn = async (props: LoginProps) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, 1000)
  })

export const signOut = async () =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, 1000)
  })
