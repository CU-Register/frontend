import { RequestStatus } from 'enums/RequestStatus'
import mockRequests from 'mocks/Requests'
import { FC } from 'react'
import 'twin.macro'
import tw from 'twin.macro'
import { dateFormatter } from 'utils/formats'

interface IRequestStatusTableProps {}
const RequestStatusTable: FC<IRequestStatusTableProps> = () => {
  return (
    <table tw="table-auto w-full">
      <thead tw="h-[40px]sticky" className="text-start align-top">
        <tr tw="text-gray font-h2 text-h2">
          <th className="text-start">ชื่อคำร้อง</th>
          <th className="text-start">เลขที่จท.</th>
          <th className="text-start">วันที่ยื่นคำร้อง</th>
          <th className="text-start">สถานะการดำเนินการ</th>
        </tr>
      </thead>
      <tbody>
        {mockRequests.map((request, index) => {
          return (
            <tr key={index} tw="text-black font-h2 text-h2" className="group">
              <td tw="group-hover:text-cu-pink">{request.requestName}</td>
              <td tw="group-hover:text-cu-pink">{request.requestNumber}</td>
              <td tw="group-hover:text-cu-pink">{dateFormatter(request.createdAt)}</td>
              <td
                css={[
                  request.status === RequestStatus.CANCELED && tw`text-gray`,
                  request.status === RequestStatus.COMPLETED && tw`text-cu-pink`,
                ]}
                tw="group-hover:text-cu-pink"
              >
                {request.status}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default RequestStatusTable
