import { RequestStatus } from 'enums/RequestStatus'

export interface IRequest {
  requestName: string
  requestNumber: number
  status: RequestStatus
  createdAt: Date
  updatedAt: Date
}
