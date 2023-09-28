import { render, screen } from '@testing-library/react-native'
import { Text } from './text'

describe('Text', () => {
  test('renders styled text component', () => {
    render(<Text style={{ color: 'red' }}>Hello</Text>)

    const text = screen.getByText('Hello')

    expect(text).toBeDefined()
  })
})
