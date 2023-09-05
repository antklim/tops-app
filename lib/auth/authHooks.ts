import { useState, useEffect } from 'react'
import { Auth, UserInfo } from '.'

type UseUserInfo = (auth: Pick<Auth, 'getInfo' | 'isSignedIn'>) => {
  loaded: boolean
  signedIn: boolean
  userInfo?: UserInfo
  error?: Error
}

// TODO: add unit tests

export const useUserInfo: UseUserInfo = (auth) => {
  const [loaded, setLoaded] = useState(false)
  const [signedIn, setSignedIn] = useState(false)
  const [userInfo, setUserInfo] = useState<UserInfo>()
  const [error, setError] = useState<Error>()

  useEffect(() => {
    ;(async () => {
      try {
        const v = await auth.isSignedIn()
        setSignedIn(v)

        if (v) {
          const userInfo = await auth.getInfo()
          setUserInfo(userInfo)
        }
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoaded(true)
      }
    })()
  }, [])

  return { loaded, signedIn, userInfo, error }
}
