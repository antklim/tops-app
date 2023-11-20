import { scope, storage } from 'src/lib/storage'

interface Profile {
  name: string
}

export const getProfile = async (): Promise<Profile> => {
  const [[, name]] = await storage.multiGet([`${scope}:name`])

  return { name: name ?? '' }
}

export const setProfile = async (profile: Profile): Promise<void> => {
  await storage.multiSet([[`${scope}:name`, profile.name]])
}

export const clearProfile = async (): Promise<void> => {
  await storage.multiRemove([`${scope}:name`])
}
