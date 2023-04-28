import { UserRole } from 'enums/UserRole'

interface IUserDetail {
  th: string
  en: string
}

interface IUserOption {
  id: string
  name: IUserDetail
}

interface IUserProfile {
  salutation: IUserOption
  firstname: IUserDetail
  lastname: IUserDetail
  email: string
  uid: string
  role: UserRole
  faculty: IUserOption
  department: IUserOption
  academicSystem: IUserOption
  studentLevel: IUserOption
  telephone: string
  address: IUserDetail
}

export default IUserProfile
