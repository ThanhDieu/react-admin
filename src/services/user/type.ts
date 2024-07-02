import { IBaseData } from 'types'

export interface IUserType extends IBaseData {
  username: string
  email?: string
  password?: string
  new_password?: string
  confirm_password?: string
  address?: string
  gender?: string
}
