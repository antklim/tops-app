import { useTheme } from '@react-navigation/native'
import { type FC } from 'react'
import { type TextProps } from 'react-native'
import { Text as DefaultText } from 'tamagui'

export const Text: FC<TextProps> = (props) => {
  const { colors } = useTheme()
  const { style, ...otherProps } = props

  const color = colors.text

  return <DefaultText style={[{ color }, style]} {...otherProps} />
}
