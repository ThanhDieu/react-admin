import axios from 'api'
import { IUserType } from 'services/user/type'
import { ResponseType } from 'types'
import { ILoginFormProps } from './type'

class AuthService {
  private apis = {
    auth: {
      login: 'login.json'
    }
  }

  auth() {
    return axios.get<ResponseType<IUserType>>(this.apis.auth.login)
  }

  register(form: ILoginFormProps) {
    return axios.post(this.apis.auth.login, form)
  }
}

const authService = new AuthService()

export default authService
