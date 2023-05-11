import { DocumentStatus } from 'enums/Document'
import { FC } from 'react'
import tw from 'twin.macro'
interface IDocumentHistoryStatus {
  status?: DocumentStatus
}
const DocumentHistoryStatus: FC<IDocumentHistoryStatus> = ({ status }) => {
  const statusMapper: Record<DocumentStatus, string> = {
    [DocumentStatus.CREATED]: 'สร้างเอกสาร',
    [DocumentStatus.SUCCESS]: 'เสร็จสิ้น',
    [DocumentStatus.IN_PROGRESS]: 'รอดำเนินการ',
    [DocumentStatus.DECLINED]: 'ถูกยกเลิก',
    [DocumentStatus.DELETED]: 'เอกสารถูกลบ',
  }
  return (
    <div
      css={[
        tw`text-black group-hover:text-cu-pink`,
        status === DocumentStatus.DECLINED && tw`text-cu-grey`,
        status === DocumentStatus.SUCCESS && tw`text-cu-pink`,
      ]}
    >
      {status && statusMapper[status]}
    </div>
  )
}

export default DocumentHistoryStatus
