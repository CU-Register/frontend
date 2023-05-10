import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import withAuth from 'components/Auth/withAuth'
import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import 'twin.macro'

const AdminHomePage: NextPage = () => {
  const createNewTemplateHandler = (event: React.MouseEvent<HTMLDivElement>) => {}
  return (
    <MainLayout header="จัดการเทมเพลตเอกสาร">
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
