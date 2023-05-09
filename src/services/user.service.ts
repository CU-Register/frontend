import { IUser } from 'interfaces/User'
import axiosInstance from 'lib/axios'

const getUsers = async (query: string) => {
  const path = 'users'
  const result: IUser[] = (await axiosInstance.get(path, { params: { query } })).data
  return result
}

const userService = {
  getUsers,
}

export default userService
