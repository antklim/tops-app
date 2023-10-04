import { config } from '@tamagui/config/v2-native'
import { createTamagui } from 'tamagui'
import fonts from './fonts'

const appConfig = createTamagui({
  ...config,
  fonts,
})

export type AppConfig = typeof appConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig
