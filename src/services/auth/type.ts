export interface ILoginFormProps {
  username: string
  password: string
}

export interface IResetPasswordFormProps {
  email: string
  token?: string
}

export interface IResetPasswordWithTokenProps {
  password: string
  token: string
}
