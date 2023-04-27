import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import RequestDraftSection from './sections/RequestDraftSection'
import SearchAndQuerySection from './sections/SearchAndQuerySection'
import withAuth from 'components/Auth/withAuth'

const DraftPage: NextPage = () => {
  return (
    <MainLayout header="แก้ไขโครงร่างคำร้อง" studentId="6231354721">
      <SearchAndQuerySection />
      <RequestDraftSection />
    </MainLayout>
  )
}

export default withAuth(DraftPage)
