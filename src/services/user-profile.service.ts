import IUserProfile from 'interfaces/UserProfile'
import axiosInstance from 'lib/axios'

const getUserProfile = async () => {
  const path = 'users/profile/me'
  const result: IUserProfile = (await axiosInstance.get(path)).data
  return result
}

const userProfileService = {
  getUserProfile,
}

export default userProfileService
