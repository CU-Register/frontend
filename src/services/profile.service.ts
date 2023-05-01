import { IUpdateUserProfileDTO, IUserProfile, IUserProfileOption } from 'interfaces/Profile'
import axiosInstance from 'lib/axios'

const getUserProfile = async () => {
  const path = 'users/profile/me'
  const result: IUserProfile = (await axiosInstance.get(path)).data
  return result
}

const getUserProfileOption = async () => {
  const path = 'users/profile/choices'
  const result: IUserProfileOption = (await axiosInstance.get(path)).data
  return result
}

const updateUserProfile = async (newProfile: IUpdateUserProfileDTO) => {
  const path = 'users/profile/me'
  await axiosInstance.put(path, newProfile)
}

const profileService = {
  getUserProfile,
  getUserProfileOption,
  updateUserProfile,
}

export default profileService
