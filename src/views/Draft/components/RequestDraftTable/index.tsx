import mockRequests from 'mocks/Requests'
import { FC } from 'react'
import 'twin.macro'
import { dateFormatter } from 'utils/formats'

interface IRequestDraftTableProps {}
const RequestDraftTable: FC<IRequestDraftTableProps> = () => {
  return (
    <table tw="table-auto w-full">
      <thead tw="h-[40px]" className="text-start align-top">
        <tr tw="text-gray font-h2 text-h2">
          <th className="text-start">ชื่อคำร้อง</th>
          <th className="text-start">เลขที่จท.</th>
          <th className="text-start">แก้ไขล่าสุด</th>
          <th className="text-start">วันที่สร้างคำร้อง</th>
        </tr>
      </thead>
      <tbody tw="overflow-auto">
        {mockRequests.map((request, index) => {
          return (
            <tr key={index} tw="text-black font-h2 text-h2" className="group">
              <td tw="group-hover:text-cu-pink">{request.requestName}</td>
              <td tw="group-hover:text-cu-pink">{request.requestNumber}</td>
              <td tw="group-hover:text-cu-pink">{dateFormatter(request.updatedAt)}</td>
              <td tw="group-hover:text-cu-pink">{dateFormatter(request.createdAt)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default RequestDraftTable
