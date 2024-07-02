import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  timeout: 10000 // 10s timeout
})

export default instance

axios.interceptors.request.use((config) => {
  return config
})

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // Handle unauthorized errors
    }
    return Promise.reject(error)
  }
)
