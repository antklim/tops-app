import AsyncStorage from '@react-native-async-storage/async-storage'

import { type Profile } from './types'

const scope = '@tops:profile'

export const getProfile = async (): Promise<Profile> => {
  const [[name]] = await AsyncStorage.multiGet([`${scope}:name`])

  return { name: name ?? '' }
}

export const setProfile = async (profile: Profile): Promise<void> => {
  await AsyncStorage.multiSet([[`${scope}:name`, profile.name]])
}

export const clearProfile = async (): Promise<void> => {
  await AsyncStorage.multiRemove([`${scope}:name`])
}
