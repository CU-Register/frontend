import { DocumentStatus } from 'enums/Document'
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
