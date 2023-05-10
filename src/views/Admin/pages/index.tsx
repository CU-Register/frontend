import withAuth from 'components/Auth/withAuth'
import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import 'twin.macro'

const AdminHomePage: NextPage = () => {
  return (
    <MainLayout>
      <div tw="bg-cu-copper">admin home page</div>
    </MainLayout>
  )
}

export default withAuth(AdminHomePage)
