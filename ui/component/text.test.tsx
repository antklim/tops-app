import { render, screen } from '@testing-library/react-native'
import { TamaguiProvider } from 'tamagui'
import { Text } from './text'
import uiConfig from '.tamagui'

describe('Text', () => {
  test('renders styled text component', () => {
    render(
      <TamaguiProvider config={uiConfig}>
        <Text>Hello</Text>
      </TamaguiProvider>,
    )

    const text = screen.getByText('Hello')

    expect(text).toBeDefined()
  })
})
