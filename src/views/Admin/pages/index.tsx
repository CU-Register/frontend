import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import withAuth from 'components/Auth/withAuth'
import { PROTECTED_ROUTES } from 'constants/Routes'
import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import 'twin.macro'

const AdminHomePage: NextPage = () => {
  const router = useRouter()
  const createNewTemplateHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    router.push(PROTECTED_ROUTES.ADMIN_TEMPLATE_CREATE)
  }
  return (
    <MainLayout header="ระบบการยื่นคำร้องเพื่อขอเอกสารสำคัญทางการศึกษา">
      <div tw="mt-5 ml-10 flex-1 mb-3 overflow-auto">
        <div tw="flex gap-4 items-center">
          <div tw="text-h2 font-h2">สร้างเทมเพลตเอกสารใหม่:</div>
          <div tw="text-h1 text-cu-pink" onClick={(event) => createNewTemplateHandler(event)}>
            <FontAwesomeIcon icon={faFileCirclePlus} />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default withAuth(AdminHomePage)
