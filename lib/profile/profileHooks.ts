import { useState, useEffect } from 'react'

import { type Profile } from './types'
import { getProfile } from './profile'

// TODO: add unit tests
// TODO: build keys based on profile interface

type UseProfile = () => {
  loaded: boolean
  profile?: Profile
  error?: Error
}

// TODO: add unit tests

export const useProfile: UseProfile = () => {
  const [loaded, setLoaded] = useState(false)
  const [profile, setProfile] = useState<Profile>()
  const [error, setError] = useState<Error>()

  useEffect(() => {
    ;(async () => {
      try {
        const v = await getProfile()
        setProfile(v)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoaded(true)
      }
    })()
  }, [])

  return { loaded, profile, error }
}
