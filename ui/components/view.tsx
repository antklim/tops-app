import { useTheme } from '@react-navigation/native';
import { type FC } from 'react';
import { View as DefaultView, type ViewProps } from 'react-native';

const View: FC<ViewProps> = (props) => {
  const { colors } = useTheme()
  const { style, ...otherProps } = props

  const backgroundColor = colors.background

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
}

export default View
