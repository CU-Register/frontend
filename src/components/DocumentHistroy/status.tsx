import { DocumentStatus } from 'enums/Document'
import { FC } from 'react'
import tw from 'twin.macro'
interface IDocumentHistoryStatus {
  status?: DocumentStatus
}
const DocumentHistoryStatus: FC<IDocumentHistoryStatus> = ({ status }) => {
  const statusMapper = new Map<DocumentStatus, string>()
  statusMapper.set(DocumentStatus.SUCCESS, 'เสร็จสิ้น')
  statusMapper.set(DocumentStatus.IN_PROGRESS, 'รอดำเนินการ')
  statusMapper.set(DocumentStatus.DECLINED, 'ถูกยกเลิก')
  return (
    <div
      css={[
        `text-black`,
        status === DocumentStatus.DECLINED && tw`text-cu-grey`,
        status === DocumentStatus.SUCCESS && tw`text-cu-pink`,
      ]}
    >
      {status && statusMapper.get(status)}
    </div>
  )
}

export default DocumentHistoryStatus
