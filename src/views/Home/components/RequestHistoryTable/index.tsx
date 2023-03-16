import { FC } from 'react'
import 'twin.macro'

interface IRequestHistoryTableProps {}
const RequestHistoryTable: FC<IRequestHistoryTableProps> = () => {
  return (
    <table tw="table-auto w-full">
      <thead>
        <tr>
          <th tw="font-h2 text-h2 text-gray" className="text-start">
            ชื่อคำร้อง
          </th>
          <th tw="font-h2 text-h2 text-gray" className="text-start">
            วันที่ยื่นคำร้อง
          </th>
          <th tw="font-h2 text-h2 text-gray" className="text-start">
            สถานะการดำเนินการ
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td tw="font-h2 text-h2 text-black">คำร้องที่ขอเข้าสังกัดหรือเปลี่ยนสังกัด</td>
          <td tw="font-h2 text-h2 text-black">14/12/2012</td>
          <td tw="font-h2 text-h2 text-gray">ถูกยกเลิก</td>
        </tr>
        <tr>
          <td tw="font-h2 text-h2 text-black">คำร้องแนะนำที่ 2</td>
          <td tw="font-h2 text-h2 text-black">13/12/2012</td>
          <td tw="font-h2 text-h2 text-cu-pink">เสร็จสิ้น</td>
        </tr>
        <tr>
          <td tw="font-h2 text-h2 text-black">คำร้องขอลาออก</td>
          <td tw="font-h2 text-h2 text-black">12/12/2012</td>
          <td tw="font-h2 text-h2 text-black">ระหว่างการดำเนินการ</td>
        </tr>
      </tbody>
    </table>
  )
}

export default RequestHistoryTable
