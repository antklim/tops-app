import { Magic } from '@magic-sdk/react-native-expo'

let m: Magic | null = null

export const magic = (): Magic => {
  if (!m) {
    m = new Magic(process.env.EXPO_PUBLIC_AUTH_API_KEY ?? '')
  }

  return m
}
