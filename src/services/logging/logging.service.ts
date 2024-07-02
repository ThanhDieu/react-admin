import axios from 'api'
import { ResponseType } from 'types'
import { ILoggingType } from './type'

class LoggingService {
  private apis = {
    auth: {
      logs: 'logs.json'
    }
  }

  getLogs() {
    return axios.get<ResponseType<ILoggingType>>(this.apis.auth.logs)
  }

  createLog(form: ILoggingType) {
    return axios.post(this.apis.auth.logs, form)
  }
}

const loginService = new LoggingService()

export default loginService
