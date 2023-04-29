import profileService from 'services/profile.service'
import { useProfileStore } from 'stores/profile.stores'

const useProfile = () => {
  const profileStore = useProfileStore()

  const setUserProfile = async () => {
    try {
      const profile = await profileService.getUserProfile()
      profileStore.setUserProfile(profile)
    } catch {
      console.error('setUserProfile error')
    }
  }

  return { setUserProfile }
}

export default useProfile
