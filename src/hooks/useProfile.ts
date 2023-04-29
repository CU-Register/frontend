import profileService from 'services/profile.service'
import { useUserProfileStore } from 'stores/profile.stores'

const useUserProfile = () => {
  const userProfileStore = useUserProfileStore()

  const setUserProfile = async () => {
    try {
      const profile = await profileService.getUserProfile()
      userProfileStore.setUserProfile(profile)
    } catch {
      console.error('setUserProfile error')
    }
  }

  return { setUserProfile }
}

export default useUserProfile
