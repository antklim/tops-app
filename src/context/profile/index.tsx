import { type ReactNode, createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from 'src/context/auth'
import { getProfile } from 'src/lib/profile'

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
}

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
  const { signedIn } = useAuth()
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    if (!signedIn) {
      setProfile(null)
      return
    }

    ;(async () => {
      try {
        const p = await getProfile()
        setProfile(p)
      } catch {}
    })()
  }, [signedIn])

  return <ProfileContext.Provider value={{ profile }}>{children}</ProfileContext.Provider>
}
