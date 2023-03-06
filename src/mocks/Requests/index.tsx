import dayjs from 'dayjs'
import { RequestStatus } from 'enums/RequestStatus'
import { IRequest } from 'interfaces/Request'
const mockRequests: IRequest[] = [
  {
    requestName: 'คำร้องขอลาออก',
    requestNumber: 32,
    status: RequestStatus.PENDING,
    createdAt: dayjs('2022-12-31').toDate(),
    updatedAt: dayjs('2022-12-15').toDate(),
  },
  {
    requestName: 'คำร้องที่ขอเข้าสังกัด หรือเปลี่ยนสังกัด',
    requestNumber: 5,
    status: RequestStatus.COMPLETED,
    createdAt: dayjs('2023-01-15').toDate(),
    updatedAt: dayjs('2022-02-01').toDate(),
  },
  {
    requestName: 'คำร้องนิยม 1',
    requestNumber: 1,
    status: RequestStatus.CANCELED,
    createdAt: dayjs('2023-02-10').toDate(),
    updatedAt: dayjs('2023-02-17').toDate(),
  },
  {
    requestName: 'คำร้องมากกิ้นส์',
    requestNumber: 40,
    status: RequestStatus.PENDING,
    createdAt: dayjs('2023-02-20').toDate(),
    updatedAt: dayjs('2022-02-25').toDate(),
  },
  {
    requestName: 'คำร้องนิยม 99',
    requestNumber: 99,
    status: RequestStatus.PENDING,
    createdAt: dayjs('2022-10-10').toDate(),
    updatedAt: dayjs('2022-10-10').toDate(),
  },
  {
    requestName: 'คำร้องขอใจเธอแลกเบอร์โทร',
    requestNumber: 55,
    status: RequestStatus.CANCELED,
    createdAt: dayjs('2023-01-01').toDate(),
    updatedAt: dayjs('2022-02-25').toDate(),
  },
  {
    requestName: 'คำร้องแพลงต้อน',
    requestNumber: 47,
    status: RequestStatus.CANCELED,
    createdAt: dayjs('2020-10-20').toDate(),
    updatedAt: dayjs('2022-10-20').toDate(),
  },
  {
    requestName: 'คำร้องขอลาออก',
    requestNumber: 32,
    status: RequestStatus.PENDING,
    createdAt: dayjs('2022-12-31').toDate(),
    updatedAt: dayjs('2022-12-15').toDate(),
  },
  {
    requestName: 'คำร้องจบการศึกษาซักที',
    requestNumber: 20,
    status: RequestStatus.PENDING,
    createdAt: dayjs('2022-02-10').toDate(),
    updatedAt: dayjs('2022-02-10').toDate(),
  },
  {
    requestName: 'คำร้องเตรียมนำเสนอโครงงาน',
    requestNumber: 85,
    status: RequestStatus.COMPLETED,
    createdAt: dayjs('2023-01-17').toDate(),
    updatedAt: dayjs('2023-02-25').toDate(),
  },
]

export default mockRequests
