import { COMMON_ROUTES } from 'constants/Routes'
import useAuth from 'hooks/useAuth'
import useProfile from 'hooks/useProfile'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { useAuthStore } from 'stores/auth.stores'
import { useProfileStore } from 'stores/profile.stores'

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const ComponentWithAuth = (props: any) => {
    const { accessToken } = useAuthStore()
    const { userProfile } = useProfileStore()
    const { fetchUserProfile } = useProfile()
    // console.log(accessToken)

    const { refreshUserToken } = useAuth()
    const router = useRouter()
    const effectExecuted = useRef(false)

    const checkCredentials = async () => {
      // React ^18 mounts component twice (first mount -> unmount -> second mount),
      // so we need to check if effect was executed
      if (effectExecuted.current) return
      const refreshToken = localStorage.getItem('cuadrs-refreshToken')
      if (!refreshToken) {
        router.replace(COMMON_ROUTES.LOGIN)
        return
      }
      await refreshUserToken(refreshToken)
      if (!userProfile) {
        await fetchUserProfile()
      }
    }

    useEffect(() => {
      checkCredentials()

      // After the first mount, the component will be unmounted and mounted again
      // so before the second mount, we need to set effectExecuted to true
      return () => {
        effectExecuted.current = true
      }
    }, [])

    if (!accessToken) {
      return null
    }

    return <WrappedComponent {...props} />
  }

  return ComponentWithAuth
}

export default withAuth
