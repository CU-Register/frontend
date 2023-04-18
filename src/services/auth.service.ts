import axiosInstance from 'lib/axios'

const healthCheck = async () => {
  const path = 'health-check'
  const result = await axiosInstance.get(path)
  return result
}

const loginWithChulaSSOToken = async (ticket: string) => {
  const path = 'auth/login'
  const result = (await axiosInstance.post(path, { ticket })).data
  return result
}

const refreshUserToken = async (refreshToken: string | null) => {
  const path = 'auth/refresh-token'
  const result = (await axiosInstance.post(path, { refreshToken })).data
  return result
}

const authService = {
  healthCheck,
  loginWithChulaSSOToken,
  refreshUserToken,
}

export default authService
