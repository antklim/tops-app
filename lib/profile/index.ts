import AsyncStorage from '@react-native-async-storage/async-storage'

const scope = '@tops:profile'

interface Profile {
  name: string
}

export const getProfile = async (): Promise<Profile> => {
  console.log('getProfile', { scope: `${scope}:name` })
  const [[, name]] = await AsyncStorage.multiGet([`${scope}:name`])

  return { name: name ?? '' }
}

export const setProfile = async (profile: Profile): Promise<void> => {
  console.log('setProfile', { scope: `${scope}:name`, profile })
  await AsyncStorage.multiSet([[`${scope}:name`, profile.name]])
}

export const clearProfile = async (): Promise<void> => {
  await AsyncStorage.multiRemove([`${scope}:name`])
}
