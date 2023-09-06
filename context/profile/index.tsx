import { type ReactNode, createContext, useContext, useState, useEffect } from 'react'
import { getProfile } from 'lib/profile'

interface Profile {
  name: string
}

interface ProfileContextShape {
  profile: Profile | null
}

const defaultProfileContext: ProfileContextShape = {
  profile: null,
}

const ProfileContext = createContext<ProfileContextShape>(defaultProfileContext)

export const useProfile = () => useContext(ProfileContext)

interface ProfileProviderProps {
  children: ReactNode
  signedIn: boolean
}

export const ProfileProvider = ({ children, signedIn }: ProfileProviderProps) => {
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    ;(async () => {
      if (!signedIn) return

      try {
        const p = await getProfile()
        setProfile(p)
      } catch {}
    })()
  }, [signedIn])

  return <ProfileContext.Provider value={{ profile }}>{children}</ProfileContext.Provider>
}
