import axios from 'api'
import { ResponseType } from 'types'
import { IUserType } from './type'

class createUserService {
  private apis = {
    auth: {
      users: 'users.json',
      user: 'users'
    }
  }

  getUsers() {
    return axios.get<ResponseType<IUserType[]>>(this.apis.auth.users)
  }
  getUser(id: string) {
    return axios.get<ResponseType<IUserType>>(`${this.apis.auth.user}/${id}.json`)
  }

  createUser(form: IUserType) {
    return axios.post(this.apis.auth.users, form)
  }
  updateUser(form: IUserType) {
    return axios.put(`${this.apis.auth.user}/${form.id}.json`, form)
  }

  deleteUser(id: string) {
    return axios.delete(`${this.apis.auth.user}/${id}.json`)
  }
}

const userService = new createUserService()

export default userService
