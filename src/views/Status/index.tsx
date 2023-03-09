import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import 'twin.macro'
import RequestStatusSection from './sections/RequestStatusSection'
import SearchAndQuerySection from './sections/SearchAndQuerySection'
const StatusPage: NextPage = () => {
  return (
    <MainLayout header="ตรวจสอบสถานะการยื่นคำร้อง" studentId="6231354721">
      <SearchAndQuerySection />
      <RequestStatusSection />
    </MainLayout>
  )
}

export default StatusPage
