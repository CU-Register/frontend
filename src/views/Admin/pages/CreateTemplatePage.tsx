import withAuth from 'components/Auth/withAuth'
import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import 'twin.macro'

const AdminCreateTemplatePage: NextPage = () => {
  return (
    <MainLayout header="เพิ่มเทมเพลตเอกสาร">
      <div tw="mt-5 ml-10 flex-1 mb-3 overflow-auto bg-cu-gold">admin create template page</div>
    </MainLayout>
  )
}

export default withAuth(AdminCreateTemplatePage)
