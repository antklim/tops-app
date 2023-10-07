import { config } from '@tamagui/config/v2-native'
import { createTamagui } from 'tamagui'
import { themes, tokens } from '@tamagui/themes'
import fonts from './fonts'

const appConfig = createTamagui({
  ...config,
  fonts,
  themes,
  tokens,
})

export type AppConfig = typeof appConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig
