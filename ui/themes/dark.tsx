import { DarkTheme as BaseTheme, Theme } from '@react-navigation/native'

const DarkTheme: Theme = {
  ...BaseTheme,
  colors: {
    ...BaseTheme.colors,
    background: '#242c40',
    text: '#d0d0c0',
  }
}

export default DarkTheme
