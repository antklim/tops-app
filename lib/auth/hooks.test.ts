import { renderHook } from '@testing-library/react-native'
import { useAuthInfo } from '.'

describe('auth/useAuthInfo hook', () => {
  test('returns state while loading', () => {
    const auth = {
      getInfo: () => Promise.resolve({ email: '' }),
      isSignedIn: () => Promise.resolve(false),
    }

    const {
      result: {
        current: { loaded },
      },
    } = renderHook(() => useAuthInfo(auth))

    expect(loaded).toBe(false)
  })

  test.todo('returns signed in state when loaded')
  test.todo('returns auth info when loaded and signed in')
  test.todo('returns error when loading fails')
})
