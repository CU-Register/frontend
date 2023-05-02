import { RequestStatus } from 'enums/RequestStatus'

// TODO: Delete everything related to this interface
export interface IRequest {
  id: string
  requestName: string
  requestNumber: number
  status: RequestStatus
  createdAt: Date
  updatedAt: Date
}

interface ITemplateDetail {
  th: string
  en: string
}
export interface ITemplate {
  templateType: string
  title: ITemplateDetail
  description: ITemplateDetail
  isLocked: boolean
  createdAt: Date
  updatedAt: Date | null
}
