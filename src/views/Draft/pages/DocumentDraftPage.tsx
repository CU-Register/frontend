import withAuth from 'components/Auth/withAuth'
import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import 'twin.macro'

const DocumentDraftPage: NextPage = () => {
  return (
    <MainLayout header="แก้ไขโครงร่างคำร้อง">
      <div tw="text-h1 font-h1 text-black bg-cu-copper">คำร้องขอลาออก (จท32)</div>
      <div tw="bg-cu-gold px-4 py-2 flex flex-col flex-1 mb-4">
        <div tw="bg-cu-pinkLd flex justify-between text-black text-h2 font-h2">
          <div tw="bg-negative-100">กรุณากรอกข้อมูลที่ไม่ถูกสีระบายทับ</div>
          <div tw="bg-green-300">แก้ไขล่าสุด: 12/4/2565, 12:23 น.</div>
        </div>
        <div tw="bg-interactive-100 flex-1" className="grow">
          for pdf rendering
        </div>
        <div tw="bg-normal-100">for user actions</div>
      </div>
    </MainLayout>
  )
}

export default withAuth(DocumentDraftPage)
