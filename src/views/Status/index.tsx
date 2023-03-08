import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import 'twin.macro'
import SearchAndQuerySection from './sections/SearchAndQuerySection'
const StatusPage: NextPage = () => {
  return (
    <MainLayout header="ตรวจสอบสถานะการยื่นคำร้อง" studentId="6231354721">
      <SearchAndQuerySection />
      <div tw="bg-cu-pinkLd mt-6 flex flex-col gap-5">history status section</div>
    </MainLayout>
  )
}

export default StatusPage
