import { UserRole } from 'enums/UserRole'
import { FC } from 'react'
import { useDocumentStore } from 'stores/document.store'
import { useProfileStore } from 'stores/profile.store'
import 'twin.macro'
import { dateFormatter, fullNameFormatter } from 'utils/formats'

interface IRequestStatusTableProps {}
const RequestStatusTable: FC<IRequestStatusTableProps> = () => {
  const { historyDocuments } = useDocumentStore()
  const { userProfile } = useProfileStore()

  return (
    <>
      {(!historyDocuments || historyDocuments.length === 0) && (
        <div tw="text-h2 font-h2 text-gray flex justify-center h-full items-center">ไม่พบประวัติการยื่นคำร้อง</div>
      )}
      {historyDocuments && historyDocuments.length > 0 && (
        <table tw="table-auto w-full">
          <thead tw="h-[40px]sticky" className="text-start align-top">
            <tr tw="text-gray font-h2 text-h2">
              <th className="text-start">ชื่อคำร้อง</th>
              <th className="text-start">เลขที่จท.</th>
              {userProfile?.role !== UserRole.STUDENT && <th className="text-start">ผ​ู้เขียนคำร้อง</th>}
              <th className="text-start">วันที่ยื่นคำร้อง</th>
              {userProfile?.role !== UserRole.STUDENT && <th className="text-start">การดำเนินการ</th>}
              <th className="text-start">สถานะ</th>
            </tr>
          </thead>
          <tbody>
            {historyDocuments.map((historyDocument, index) => {
              return (
                <tr key={index} tw="text-black font-h2 text-h2" className="group">
                  <td tw="group-hover:text-cu-pink">{historyDocument.template.title.th}</td>
                  <td tw="group-hover:text-cu-pink">{historyDocument.template.templateType}</td>
                  {userProfile?.role !== UserRole.STUDENT && (
                    <td tw="group-hover:text-cu-pink">
                      {fullNameFormatter(historyDocument.creator.firstname.th, historyDocument.creator.lastname.th)}
                    </td>
                  )}
                  <td tw="group-hover:text-cu-pink">{dateFormatter(historyDocument.grantedAt)}</td>
                  {userProfile?.role !== UserRole.STUDENT && (
                    <td tw="group-hover:text-cu-pink">{historyDocument.action}</td>
                  )}
                  <td tw="group-hover:text-cu-pink">{historyDocument.status}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </>
  )
}

export default RequestStatusTable
