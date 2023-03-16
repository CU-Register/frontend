import { RequestStatus } from 'enums/RequestStatus'

export interface IRequest {
  id: string
  requestName: string
  requestNumber: number
  status: RequestStatus
  createdAt: Date
  updatedAt: Date
}
