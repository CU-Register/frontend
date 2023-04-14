import axiosInstance from 'lib/axios'

const healthCheck = async () => {
  const path = 'health-check'
  try {
    const result = await axiosInstance.get(path)
    return result
  } catch (error) {
    return error
  }
}

const loginWithChulaSSOToken = async (ticket: string) => {
  const path = 'auth/login'
  try {
    const result = (await axiosInstance.post(path, { ticket })).data
    return result
  } catch (error) {
    return error
  }
}

const authService = {
  healthCheck,
  loginWithChulaSSOToken,
}

export default authService
