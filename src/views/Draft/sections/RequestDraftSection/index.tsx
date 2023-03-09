import { FC } from 'react'
import 'twin.macro'
import RequestStatusTable from 'views/Status/components/RequestStatusTable'
const RequestDraftSection: FC = () => {
  return (
    <div tw="mt-6 flex flex-col gap-5">
      <div tw="text-body font-body text-gray">สามารถคลิ้กที่ชื่อคำร้อง เพื่อดูข้อมูลเพิ่มเติ่มอย่างละเอียด</div>
      <div tw="max-h-[400px] overflow-auto">
        <RequestStatusTable />
      </div>
    </div>
  )
}

export default RequestDraftSection
