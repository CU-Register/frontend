import { DocumentHistoryActionEnum } from 'enums/Document'
import { FC } from 'react'
import tw from 'twin.macro'

interface IDocumentHistoryAction {
  action?: DocumentHistoryActionEnum
}
const DocumentHistoryAction: FC<IDocumentHistoryAction> = ({ action: status }) => {
  const statusMapper: Record<DocumentHistoryActionEnum, string> = {
    [DocumentHistoryActionEnum.APPROVED]: 'สร้างเอกสาร',
    [DocumentHistoryActionEnum.CREATED]: 'ส่งต่อ',
    [DocumentHistoryActionEnum.DECLINED]: 'ยกเลิก',
  }

  return (
    <div
      css={[tw`text-black group-hover:text-cu-pink`, status === DocumentHistoryActionEnum.DECLINED && tw`text-cu-grey`]}
    >
      {status && statusMapper[status]}
    </div>
  )
}

export default DocumentHistoryAction
