import { createTamagui } from 'tamagui'
import { themes, tokens } from '@tamagui/themes'
import { shorthands } from '@tamagui/shorthands'
import fonts from './fonts'

const appConfig = createTamagui({
  fonts,
  shorthands,
  themes,
  tokens,
})

export type AppConfig = typeof appConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig
