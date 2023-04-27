import axiosInstance from 'lib/axios'

const getUserProfile = async () => {
  const path = 'users/profile/me'
  const result = (await axiosInstance.get(path)).data
  console.log('getUserProfile service', result)
  return result
}

const profileService = {
  getUserProfile,
}

export default profileService
