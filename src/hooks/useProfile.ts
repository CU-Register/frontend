import { IUserProfile } from 'interfaces/Profile'
import profileService from 'services/profile.service'
import { useProfileStore } from 'stores/profile.store'

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

  const updateUserProfile = async (newProfile: IUserProfile) => {
    try {
      await profileService.updateUserProfile({
        ...newProfile,
        salutation: newProfile.salutation.id,
        faculty: newProfile.faculty.id,
        department: newProfile.department.id,
        studentLevel: newProfile.studentLevel.id,
        academicSystem: newProfile.academicSystem.id,
      })
    } catch {
      console.error('updateUserProfile error')
      alert('เกิดข้อผิดพลาดในการอัพเดทข้อมูล')
    }
  }

  return { fetchUserProfile, fetchUserProfileOption, updateUserProfile }
}

export default useProfile
