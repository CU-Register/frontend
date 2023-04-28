import { UserRole } from 'enums/UserRole'

interface IUserProfile {
  firstName: {
    th: string | null
    en: string | null
  }
  lastName: {
    th: string | null
    en: string | null
  }
  email: string | null
  uid: string | null
  role: UserRole | null
  faculty: {
    id: string | null
    name: {
      th: string | null
      en: string | null
    }
  }
  department: {
    id: string | null
    name: {
      th: string | null
      en: string | null
    }
  }
  academicSystem: {
    id: string | null
    name: {
      th: string | null
      en: string | null
    }
  }
  studentLevel: {
    id: string | null
    name: {
      th: string | null
      en: string | null
    }
  }
  telephone: string | null
  address: string | null
}

export default IUserProfile
