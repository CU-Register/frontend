import DocumentHistoryStatus from 'components/DocumentHistroy/status'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { useDocumentStore } from 'stores/document.store'
import { useProfileStore } from 'stores/profile.store'
import 'twin.macro'
import { dateFormatter } from 'utils/formats'

interface IHistoryDocumentTableProps {}
const HistoryDocumentTable: FC<IHistoryDocumentTableProps> = () => {
  const { historyDocuments, holdingDocuments } = useDocumentStore()
  const { userProfile } = useProfileStore()
  const router = useRouter()
  const isStaff = userProfile?.role === 'faculty'

  const pushToPageHandler = (path: string) => {
    return () => {
      router.push(path)
    }
  }

  const handleClickUserHistory = (document_id: string) => pushToPageHandler(`/status/${document_id}`)
  const handleClickStaffHolding = (document_id: string) => pushToPageHandler(`/staff/request/${document_id}`)

  //   const handlerOnclick
  if (isStaff) {
    return (
      <>
        {(!holdingDocuments || holdingDocuments.length === 0) && (
          <div tw="text-h2 font-h2 text-gray flex justify-center">ไม่พบคำร้องที่รอดำเนินการ</div>
        )}
        {holdingDocuments && holdingDocuments.length > 0 && (
          <table tw="table-auto w-full">
            <thead>
              <tr>
                <th tw="font-h2 text-h2 text-gray" className="text-start">
                  ชื่อคำร้อง
                </th>
                <th tw="font-h2 text-h2 text-gray" className="text-start">
                  เลขจท.
                </th>
                <th tw="font-h2 text-h2 text-gray" className="text-start">
                  ส่งมาจาก
                </th>
                <th tw="font-h2 text-h2 text-gray" className="text-start">
                  ผู้เขียนคำร้อง
                </th>
                <th tw="font-h2 text-h2 text-gray" className="text-start">
                  วันที่ถูกส่งมา
                </th>
              </tr>
            </thead>
            <tbody tw="overflow-auto cursor-pointer font-h2 text-h2 text-black">
              {holdingDocuments.map((historyDocument, index) => {
                return (
                  <tr
                    key={index}
                    tw=" font-h2 text-h2 text-black hover:text-cu-pink"
                    onClick={handleClickStaffHolding(historyDocument.docId)}
                  >
                    <td tw="">{historyDocument.template.title.th}</td>
                    <td tw="">{historyDocument.template.templateType}</td>
                    <td tw="">
                      {historyDocument.granter.firstname.th} {historyDocument.granter.lastname.th}
                    </td>
                    <td tw="">
                      {historyDocument.creator.firstname.th} {historyDocument.creator.lastname.th}
                    </td>
                    <td tw="">{dateFormatter(historyDocument.grantedAt)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </>
    )
  }

  return (
    <>
      {(!historyDocuments || historyDocuments.length === 0) && (
        <div tw="text-h2 font-h2 text-gray flex justify-center">ไม่พบประวัติการยื่นคำร้อง</div>
      )}
      {historyDocuments && historyDocuments.length > 0 && (
        <table tw="table-auto w-full">
          <thead>
            <tr>
              <th tw="font-h2 text-h2 text-gray" className="text-start">
                ชื่อคำร้อง
              </th>
              <th tw="font-h2 text-h2 text-gray" className="text-start">
                เลขจท.
              </th>
              <th tw="font-h2 text-h2 text-gray" className="text-start">
                วันที่ยื่นคำร้อง
              </th>
              <th tw="font-h2 text-h2 text-gray" className="text-start">
                สถานะการดำเนินการ
              </th>
            </tr>
          </thead>
          <tbody tw="overflow-auto cursor-pointer font-h2 text-h2 text-black ">
            {historyDocuments.map((historyDocument, index) => {
              return (
                <tr
                  key={index}
                  tw=" font-h2 text-h2 text-black hover:text-cu-pink"
                  onClick={handleClickUserHistory(historyDocument.docId)}
                >
                  <td tw="">{historyDocument.template.title.th}</td>
                  <td tw="">{historyDocument.template.templateType}</td>
                  <td tw="">{dateFormatter(historyDocument.createdAt)}</td>
                  <td tw="">
                    <DocumentHistoryStatus status={historyDocument.status} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </>
  )
}

export default HistoryDocumentTable
