import { useState, useEffect } from 'react'
import { Auth, UserInfo } from '.'

type UseUserInfo = (auth: Auth) => {
  loaded: boolean
  signedIn: boolean
  userInfo?: UserInfo
  error?: Error
}

export const useUserInfo: UseUserInfo = (auth) => {
  const [loaded, setLoaded] = useState(false)
  const [signedIn, setSignedIn] = useState(false)
  const [userInfo, setUserInfo] = useState<UserInfo>()
  const [error, setError] = useState<Error>()

  console.log('useUserInfo')

  useEffect(() => {
    console.log('1 >>>')
    ;(async () => {
      console.log('2 >>>')
      try {
        console.log('3 >>>')
        const v = await auth.isSignedIn()
        setSignedIn(v)

        console.log({ signedIn: v })

        if (v) {
          const userInfo = await auth.getInfo()
          setUserInfo(userInfo)

          console.log({ userInfo })
        }
      } catch (err) {
        console.log('4 >>>')
        setError(err as Error)
      } finally {
        console.log('5 >>>')
        setLoaded(true)
      }
    })()
  }, [])

  return { loaded, signedIn, userInfo, error }
}
