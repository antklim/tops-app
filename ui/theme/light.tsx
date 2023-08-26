import { DefaultTheme as BaseTheme, Theme } from '@react-navigation/native'

export const LightTheme: Theme = {
  ...BaseTheme,
  colors: {
    ...BaseTheme.colors,
    background: '#d0d0c0',
    text: '#242c40',
  },
}
