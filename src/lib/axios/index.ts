import axios from 'axios'
import { useAuthStore } from 'stores/auth.store'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  withCredentials: true,
})

axiosInstance.interceptors.request.use(
  async (config) => {
    const { accessToken } = useAuthStore.getState()
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
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
    // console.error('error at interceptor:', error)

    // if (error.response?.status === 401) {
    //   try {
    //     const refreshToken = localStorage.getItem('cuadrs-refreshToken')
    //     console.log('refreshToken at interceptor', refreshToken)

    //     const response = await axiosInstance.post('auth/refresh-token', {
    //       refreshToken,
    //     })

    //     if (response.status === 200) {
    //       axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`
    //       // Retry the original request
    //       // return axiosInstance(<AxiosRequestConfig>error.config)
    //     }
    //   } catch (refreshError) {
    //     console.log('Error refreshing access token', refreshError)
    //   }
    // }
    return Promise.reject(error)
  },
)

export default axiosInstance
