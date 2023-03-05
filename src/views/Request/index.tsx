import MainLayout from 'layouts/MainLayout'
import type { NextPage } from 'next'
import 'twin.macro'
import SearchAndQuerySection from './sections/SearchAndQuerySection'

const RequestPage: NextPage = () => {
  return (
    <MainLayout header="ยื่นคำร้องเพื่อขอเอกสารสำคัญทางการศึกษา" studentId="6231354721">
      <SearchAndQuerySection />
      <div tw="bg-cu-pinkLd mt-3">request list section</div>
    </MainLayout>
  )
}

export default RequestPage
