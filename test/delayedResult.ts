export const delayedResolve = <T>(v: T, ms?: number): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(v), ms ?? 100))

export const delayedReject = (e: Error, ms?: number): Promise<Error> =>
  new Promise((_, reject) => setTimeout(() => reject(e), ms ?? 100))
