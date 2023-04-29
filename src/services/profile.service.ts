import { IUserProfile, IUserProfileOption } from 'interfaces/Profile'
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

const profileService = {
  getUserProfile,
  getUserProfileOption,
}

export default profileService
