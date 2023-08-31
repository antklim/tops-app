export type LoginMethod = 'apple' | 'email'

export interface LoginProps {
  method: LoginMethod
  email?: string
}

export interface Auth {
  isLoggedIn: () => Promise<boolean>
  getInfo: () => Promise<Record<string, unknown>>
  login: (props: LoginProps) => Promise<void>
  logout: () => Promise<void>
}
