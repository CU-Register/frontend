import { DocumentHistoryActionEnum } from 'enums/Document'
import { FC } from 'react'
import tw from 'twin.macro'

interface IDocumentHistoryAction {
  action?: DocumentHistoryActionEnum
}
const DocumentHistoryAction: FC<IDocumentHistoryAction> = ({ action: status }) => {
  const statusMapper = new Map<DocumentHistoryActionEnum, string>()
  statusMapper.set(DocumentHistoryActionEnum.CREATED, 'สร้างเอกสาร')
  statusMapper.set(DocumentHistoryActionEnum.APPROVED, 'ส่งต่อ')
  statusMapper.set(DocumentHistoryActionEnum.DECLINED, 'ยกเลิก')
  return (
    <div css={[`text-black`, status === DocumentHistoryActionEnum.DECLINED && tw`text-cu-grey`]}>
      {status && statusMapper.get(status)}
    </div>
  )
}

export default DocumentHistoryAction
