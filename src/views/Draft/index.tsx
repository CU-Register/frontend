import withAuth from 'components/Auth/withAuth'
import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import RequestDraftSection from './sections/RequestDraftSection'
import SearchAndQuerySection from './sections/SearchAndQuerySection'

const DraftPage: NextPage = () => {
  return (
    <MainLayout header="แก้ไขโครงร่างคำร้อง">
      <SearchAndQuerySection />
      <RequestDraftSection />
    </MainLayout>
  )
}

export default withAuth(DraftPage)
