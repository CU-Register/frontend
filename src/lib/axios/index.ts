import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
})

axiosInstance.interceptors.request.use(
  async (config) => {
    axiosInstance.defaults.headers['x-request-id'] = axiosInstance.defaults.headers['x-request-id'] ?? uuidv4()
    config.headers['x-request-id'] = axiosInstance.defaults.headers['x-request-id']
    return config
  },
  async (error) => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    if (error.response.status === 401) {
      try {
        const refreshToken = localStorage.getItem('cuadrs-refreshToken')
        const response = await axios.post('auth/refresh-token', {
          refreshToken,
        })
        if (response.status === 200) {
          axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`
          // Retry the original request
          return axiosInstance(error.config)
        }
      } catch (refreshError) {
        console.log('Error refreshing access token', refreshError)
      }
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
