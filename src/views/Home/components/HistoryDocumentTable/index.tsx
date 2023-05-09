import { FC } from 'react'
import { useDocumentStore } from 'stores/document.store'
import 'twin.macro'
import { dateFormatter } from 'utils/formats'

interface IHistoryDocumentTableProps {}
const HistoryDocumentTable: FC<IHistoryDocumentTableProps> = () => {
  const { historyDocuments } = useDocumentStore()

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
                วันที่ยื่นคำร้อง
              </th>
              <th tw="font-h2 text-h2 text-gray" className="text-start">
                สถานะการดำเนินการ
              </th>
            </tr>
          </thead>
          <tbody tw="overflow-auto cursor-pointer font-h2 text-h2 text-black">
            {historyDocuments.map((historyDocument, index) => {
              return (
                <tr key={index} tw=" font-h2 text-h2 text-black">
                  <td tw="">{historyDocument.template.title.th}</td>
                  <td tw="">{dateFormatter(historyDocument.createdAt)}</td>
                  <td tw="">{historyDocument.status}</td>
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
