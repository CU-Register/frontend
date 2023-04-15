import { COMMON_ROUTES, PROTECTED_ROUTES } from 'constants/Routes'
import { useRouter } from 'next/router'
import authService from 'services/auth.service'
import { useAuthStore } from 'stores/auth.stores'

const useAuth = () => {
  const authStore = useAuthStore()
  const router = useRouter()

  const login = async (ticket: string) => {
    try {
      const result = await authService.loginWithChulaSSOToken(ticket)
      const { accessToken, refreshToken } = result
      authStore.setAccessToken(accessToken)
      localStorage.setItem('cuadrs-refreshToken', refreshToken)
      router.push(PROTECTED_ROUTES.HOME)
    } catch (error) {
      console.error(error)
      router.push(COMMON_ROUTES.LOGIN)
    }
  }

  const logout = () => {
    localStorage.removeItem('cuadrs-refreshToken')
    authStore.setAccessToken(null)
    router.replace(PROTECTED_ROUTES.LOGOUT)
  }

  return { login, logout }
}

export default useAuth
