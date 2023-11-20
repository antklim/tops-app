import { useState, useEffect } from 'react'
import { type Auth, type AuthInfo } from '.'

type UseAuthInfo = (auth: Pick<Auth, 'getInfo' | 'isSignedIn'>) => {
  authInfo?: AuthInfo
  error?: Error
  loaded: boolean
  signedIn: boolean
}

export const useAuthInfo: UseAuthInfo = (auth) => {
  const [loaded, setLoaded] = useState(false)
  const [signedIn, setSignedIn] = useState(false)
  const [authInfo, setAuthInfo] = useState<AuthInfo>()
  const [error, setError] = useState<Error>()

  useEffect(() => {
    ;(async () => {
      try {
        const v = await auth.isSignedIn()
        setSignedIn(v)

        if (v) {
          const authInfo = await auth.getInfo()
          setAuthInfo(authInfo)
        }
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoaded(true)
      }
    })()
  }, [])

  return { authInfo, error, loaded, signedIn }
}
