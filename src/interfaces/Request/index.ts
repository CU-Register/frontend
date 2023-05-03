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
