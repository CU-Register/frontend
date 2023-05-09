import { useRouter } from 'next/router'
import { FC } from 'react'
import { useDocumentStore } from 'stores/document.store'
import 'twin.macro'
import { dateFormatter } from 'utils/formats'

interface IDocumentDraftTableProps {}
const DocumentDraftTable: FC<IDocumentDraftTableProps> = () => {
  const { holdingDocuments } = useDocumentStore()
  const router = useRouter()

  const holdingDocumentClickHandler = (event: React.MouseEvent<HTMLTableRowElement>, docId: string) => {
    router.push(`/draft/${docId}`)
  }

  return (
    <>
      {(!holdingDocuments || holdingDocuments.length === 0) && (
        <div tw="text-h2 font-h2 text-gray flex justify-center h-full items-center">ไม่พบโครงร่างคำร้อง</div>
      )}
      {holdingDocuments && holdingDocuments.length > 0 && (
        <table tw="table-auto w-full">
          <thead tw="h-[40px]" className="text-start align-top">
            <tr tw="text-gray font-h2 text-h2">
              <th className="text-start">ชื่อคำร้อง</th>
              <th className="text-start">เลขที่จท.</th>
              <th className="text-start">แก้ไขล่าสุด</th>
              <th className="text-start">วันที่สร้างคำร้อง</th>
            </tr>
          </thead>
          {
            <tbody tw="overflow-auto cursor-pointer">
              {holdingDocuments.map((holdingDocument, index) => {
                return (
                  <tr
                    key={index}
                    tw="text-black font-h2 text-h2"
                    className="group"
                    onClick={(event) => holdingDocumentClickHandler(event, holdingDocument.docId)}
                  >
                    <td tw="group-hover:text-cu-pink">{holdingDocument.template.title.th}</td>
                    <td tw="group-hover:text-cu-pink">{holdingDocument.template.templateType}</td>
                    <td tw="group-hover:text-cu-pink">{dateFormatter(holdingDocument.updatedAt)}</td>
                    <td tw="group-hover:text-cu-pink">{dateFormatter(holdingDocument.createdAt)}</td>
                  </tr>
                )
              })}
            </tbody>
          }
        </table>
      )}
    </>
  )
}

export default DocumentDraftTable
