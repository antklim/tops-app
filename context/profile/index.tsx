import { type ReactNode, createContext, useContext, useState, useEffect } from 'react'
import { type Profile } from 'lib/profile'

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
  const [ctxProfile, setCtxProfile] = useState<Profile | null>(null)

  return (
    <ProfileContext.Provider
      value={{
        profile: ctxProfile,
      }}>
      {children}
    </ProfileContext.Provider>
  )
}
