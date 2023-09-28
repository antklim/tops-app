import { renderHook, waitFor } from '@testing-library/react-native'
import { AuthInfo, useAuthInfo } from '.'
import { delayedReject, delayedResolve } from 'test/delayedResult'

describe('auth/useAuthInfo hook', () => {
  test('returns initial state while loading', () => {
    const auth = {
      getInfo: () => delayedResolve<AuthInfo>({ email: '' }),
      isSignedIn: () => delayedResolve(false, 200),
    }

    const {
      result: {
        current: { loaded, signedIn, authInfo, error },
      },
      unmount,
    } = renderHook(() => useAuthInfo(auth))

    unmount()

    expect(loaded).toBe(false)
    expect(signedIn).toBe(false)
    expect(authInfo).toBe(undefined)
    expect(error).toBe(undefined)
  })

  test('returns signed in state when loaded', async () => {
    const auth = {
      getInfo: () => delayedResolve<AuthInfo>({ email: '' }),
      isSignedIn: () => delayedResolve(false, 200),
    }

    const { result } = renderHook(() => useAuthInfo(auth))

    expect(result.current.loaded).toBe(false)

    await waitFor(() => {
      expect(result.current.loaded).toBe(true)
    })

    expect(result.current.signedIn).toBe(false)
    expect(result.current.authInfo).toBe(undefined)
    expect(result.current.error).toBe(undefined)
  })

  test('returns auth info when loaded and signed in', async () => {
    const auth = {
      getInfo: () => delayedResolve<AuthInfo>({ email: 'hello@tops.app' }),
      isSignedIn: () => delayedResolve(true, 200),
    }

    const { result } = renderHook(() => useAuthInfo(auth))

    expect(result.current.loaded).toBe(false)

    await waitFor(() => {
      expect(result.current.loaded).toBe(true)
    })

    expect(result.current.signedIn).toBe(true)
    expect(result.current.authInfo).toEqual({ email: 'hello@tops.app' })
    expect(result.current.error).toBe(undefined)
  })

  test('returns error when loading fails', async () => {
    const auth = {
      getInfo: () => delayedReject<AuthInfo>(new Error('Failed to get info')),
      isSignedIn: () => delayedResolve(true, 200),
    }

    const { result } = renderHook(() => useAuthInfo(auth))

    expect(result.current.loaded).toBe(false)

    await waitFor(() => {
      expect(result.current.loaded).toBe(true)
    })

    expect(result.current.signedIn).toBe(true)
    expect(result.current.authInfo).toBe(undefined)
    expect(result.current.error).toEqual(new Error('Failed to get info'))
  })
})
