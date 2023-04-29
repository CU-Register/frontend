import profileService from 'services/profile.service'
import { useProfileStore } from 'stores/profile.stores'

const useProfile = () => {
  const profileStore = useProfileStore()

  const fetchUserProfile = async () => {
    try {
      const profile = await profileService.getUserProfile()
      profileStore.setUserProfile(profile)
    } catch {
      console.error('fetchUserProfile error')
    }
  }

  const fetchUserProfileOption = async () => {
    try {
      const profileOption = await profileService.getUserProfileOption()
      profileStore.setUserProfileOption(profileOption)
    } catch {
      console.error('fetchUserProfileOption error')
    }
  }

  return { fetchUserProfile, fetchUserProfileOption }
}

export default useProfile
