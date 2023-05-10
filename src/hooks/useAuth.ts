import { COMMON_ROUTES, PROTECTED_ROUTES } from 'constants/Routes'
import { useRouter } from 'next/router'
import authService from 'services/auth.service'
import { useAuthStore } from 'stores/auth.store'
import { useProfileStore } from 'stores/profile.store'

const useAuth = () => {
  const authStore = useAuthStore()
  const profileStore = useProfileStore()
  const router = useRouter()

  const login = async (ticket: string) => {
    try {
      const result = await authService.loginWithChulaSSOToken(ticket)
      const { accessToken, refreshToken } = result
      authStore.setAccessToken(accessToken)
      localStorage.setItem('cuadrs-refreshToken', refreshToken)
      router.push(PROTECTED_ROUTES.HOME)
    } catch (error) {
      console.error('login error:', error)
      alert('Login failed')
      router.replace(COMMON_ROUTES.LOGIN)
    }
  }

  const refreshUserToken = async (refreshToken: string | null) => {
    try {
      const result = await authService.refreshUserToken(refreshToken)
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } = result
      authStore.setAccessToken(newAccessToken)
      localStorage.setItem('cuadrs-refreshToken', newRefreshToken)
    } catch (error) {
      console.error('refresh token error:', error)
      router.replace(COMMON_ROUTES.LOGIN)
    }
  }

  const logout = () => {
    localStorage.removeItem('cuadrs-refreshToken')
    authStore.setAccessToken(null)
    profileStore.setUserProfile(null)
    router.replace(PROTECTED_ROUTES.LOGOUT)
    alert('Logout success')
  }

  return { login, refreshUserToken, logout }
}

export default useAuth
