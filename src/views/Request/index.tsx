import withAuth from 'components/Auth/withAuth'
import MainLayout from 'layouts/MainLayout'
import type { NextPage } from 'next'
import 'twin.macro'
import RequestListSection from './sections/RequestListSection'
import SearchAndQuerySection from './sections/SearchAndQuerySection'

const RequestPage: NextPage = () => {
  return (
    <MainLayout header="ยื่นคำร้องเพื่อขอเอกสารสำคัญทางการศึกษา">
      <SearchAndQuerySection />
      <RequestListSection />
    </MainLayout>
  )
}

export default withAuth(RequestPage)
