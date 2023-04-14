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
      router.push('/')
    } catch (error) {
      console.log(error)
      router.push('/login')
    }
  }

  return { login }
}

export default useAuth
