import { UserRole } from 'enums/UserRole'

interface IUserDetail {
  th: string
  en: string
}

export interface IUser {
  uid: string
  role: UserRole
  firstname: IUserDetail
  lastname: IUserDetail
}
