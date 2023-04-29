import { IUserProfile } from 'interfaces/Profile'
import axiosInstance from 'lib/axios'

const getUserProfile = async () => {
  const path = 'users/profile/me'
  const result: IUserProfile = (await axiosInstance.get(path)).data
  return result
}

const profileService = {
  getUserProfile,
}

export default profileService
