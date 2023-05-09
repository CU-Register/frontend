import { DocumentStatus } from 'enums/Document'
import { UserRole } from 'enums/UserRole'
import { ITemplate } from 'interfaces/Template'

interface IDocumentDetail {
  th: string
  en: string
}
export interface IDocument {
  granter: {
    uid: string
    firstname: IDocumentDetail
    lastname: IDocumentDetail
  }
  creator: {
    uid: string
    firstname: IDocumentDetail
    lastname: IDocumentDetail
  }
  template: Pick<ITemplate, 'templateType' | 'title' | 'description'>
  docId: string
  status: DocumentStatus

  // TODO: create action enums and update the type
  action: any //nullable

  actionAt: Date | null
  grantedStep: number
  grantedAt: Date
  updatedAt: Date
  createdAt: Date
}

interface IDocumentInfoOption {
  name: IDocumentDetail
  id: string
}
interface IDocumentInfoStakeHolder {
  uid: string
  role: UserRole
  firstname: IDocumentDetail
  lastname: IDocumentDetail
  address: string
  email: string
  salutation: IDocumentInfoOption
  faculty: IDocumentInfoOption
  department: IDocumentInfoOption
  studentLevel: IDocumentInfoOption
  academicSystem: IDocumentInfoOption
  telephone: string
}
export interface IDocumentInfoTimeline {
  message: IDocumentDetail
  actor: {
    firstname: IDocumentDetail
    lastname: IDocumentDetail
    actor_id: string
  }
  step: number
  timestamp: Date
}

export interface IDocumentInfo {
  docId: string
  template: Pick<ITemplate, 'templateType' | 'title' | 'description'>
  status: DocumentStatus
  createdAt: Date
  updatedAt: Date | null
  deletedAt: Date | null
  step: {
    current: number
    overall: number
  }
  creator: IDocumentInfoStakeHolder
  holder: IDocumentInfoStakeHolder
  timeline: IDocumentInfoTimeline[]
}
