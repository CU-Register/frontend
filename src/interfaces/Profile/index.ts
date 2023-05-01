import { UserRole } from 'enums/UserRole'

interface IUserDetail {
  th: string
  en: string
}

interface IUserOption {
  id: string
  name: IUserDetail
}

export interface IUserProfile {
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
  address: string
}

interface IFaculty {
  id: string
  name: IUserDetail
  departments: IUserOption[]
}

export interface IUserProfileOption {
  studentLevels: IUserOption[]
  academicSystems: IUserOption[]
  faculties: IFaculty[]
  salutations: IUserOption[]
}
