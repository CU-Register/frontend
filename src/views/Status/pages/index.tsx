import withAuth from 'components/Auth/withAuth'
import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import 'twin.macro'
import RequestStatusSection from '../sections/RequestStatusSection'
import SearchAndQuerySection from '../sections/SearchAndQuerySection'
const StatusPage: NextPage = () => {
  return (
    <MainLayout header="ตรวจสอบสถานะการยื่นคำร้อง">
      <SearchAndQuerySection />
      <RequestStatusSection />
    </MainLayout>
  )
}

export default withAuth(StatusPage)
