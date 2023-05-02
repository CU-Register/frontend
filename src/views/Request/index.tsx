import withAuth from 'components/Auth/withAuth'
import MainLayout from 'layouts/MainLayout'
import type { NextPage } from 'next'
import 'twin.macro'
import TemplateListSection from './sections/TemplateListSection'

const RequestPage: NextPage = () => {
  return (
    <MainLayout header="ยื่นคำร้องเพื่อขอเอกสารสำคัญทางการศึกษา">
      {/* <SearchAndQuerySection /> */}
      <TemplateListSection />
    </MainLayout>
  )
}

export default withAuth(RequestPage)
