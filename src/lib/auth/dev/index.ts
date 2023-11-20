import { type LoginProps, type AuthInfo } from '..'
import { scope, storage } from 'src/lib/storage'

export const isSignedIn = async () => {
  const isSignedIn = await storage.getItem(`${scope}:isSignedIn`)
  return isSignedIn === 'true'
}

export const getInfo = async (): Promise<AuthInfo> => {
  const [[, email]] = await storage.multiGet([`${scope}:email`])

  return { email: email ?? '' }
}

export const signIn = async ({ email }: LoginProps) => {
  await storage.multiSet([
    [`${scope}:isSignedIn`, 'true'],
    [`${scope}:email`, email],
  ])
}

export const signOut = async () => {
  await storage.multiRemove([`${scope}:isSignedIn`, `${scope}:email`])
}
