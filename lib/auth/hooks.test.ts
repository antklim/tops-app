import { renderHook } from '@testing-library/react-native'
import { useAuthInfo } from '.'
import { delayedResolve } from 'test/delayedResult'

describe('auth/useAuthInfo hook', () => {
  test('returns state while loading', () => {
    const auth = {
      getInfo: () => delayedResolve<{ email: string }>({ email: '' }),
      isSignedIn: () => delayedResolve(false, 200),
    }

    const {
      result: {
        current: { loaded },
      },
      unmount,
    } = renderHook(() => useAuthInfo(auth))

    unmount()

    expect(loaded).toBe(false)
  })

  test.todo('returns signed in state when loaded')
  test.todo('returns auth info when loaded and signed in')
  test.todo('returns error when loading fails')
})
