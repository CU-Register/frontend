import { FC } from 'react'
import { useDocumentStore } from 'stores/document.store'
import 'twin.macro'

interface IHistoryDocumentTableProps {}
const HistoryDocumentTable: FC<IHistoryDocumentTableProps> = () => {
  const { historyDocuments } = useDocumentStore()
  return (
    <>
      {(!historyDocuments || historyDocuments.length === 0) && (
        <div tw="text-h2 font-h2 text-gray flex justify-center">ไม่พบประวัติการยื่นคำร้อง</div>
      )}
      {historyDocuments && historyDocuments.length > 0 && (
        // TODO map history document fields to table body
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
          <tbody tw="overflow-auto cursor-pointer">
            <tr>
              <td tw="font-h2 text-h2 text-black">คำร้องที่ขอเข้าสังกัดหรือเปลี่ยนสังกัด</td>
              <td tw="font-h2 text-h2 text-black">14/12/2012</td>
              <td tw="font-h2 text-h2 text-gray">ถูกยกเลิก</td>
            </tr>
            <tr>
              <td tw="font-h2 text-h2 text-black">คำร้องแนะนำที่ 2</td>
              <td tw="font-h2 text-h2 text-black">13/12/2012</td>
              <td tw="font-h2 text-h2 text-cu-pink">เสร็จสิ้น</td>
            </tr>
            <tr>
              <td tw="font-h2 text-h2 text-black">คำร้องขอลาออก</td>
              <td tw="font-h2 text-h2 text-black">12/12/2012</td>
              <td tw="font-h2 text-h2 text-black">ระหว่างการดำเนินการ</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  )
}

export default HistoryDocumentTable
