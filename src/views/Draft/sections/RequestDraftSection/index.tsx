import { FC } from 'react'
import 'twin.macro'
import RequestDraftTable from 'views/Draft/components/RequestDraftTable'
const RequestDraftSection: FC = () => {
  return (
    <div tw="my-6 flex flex-col gap-5 flex-1 overflow-auto">
      <div tw="text-body font-body text-gray">สามารถคลิ้กที่ชื่อคำร้อง เพื่อดูข้อมูลเพิ่มเติ่มอย่างละเอียด</div>
      <div tw="flex-1 overflow-auto">
        <RequestDraftTable />
      </div>
    </div>
  )
}

export default RequestDraftSection
