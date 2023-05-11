import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import withAuth from 'components/Auth/withAuth'
import TemplateCard from 'components/TemplateCard'
import { PROTECTED_ROUTES } from 'constants/Routes'
import useAdmin from 'hooks/useAdmin'
import { IAdminTemplate } from 'interfaces/Template'
import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import 'twin.macro'

const AdminHomePage: NextPage = () => {
  const router = useRouter()
  const [adminTemplates, setAdminTemplates] = useState<IAdminTemplate[] | null>(null)
  const { fetchTemplateForAdmin } = useAdmin()

  const initAdminTemplates = async () => {
    try {
      const adminTeplates = await fetchTemplateForAdmin()
      setAdminTemplates(adminTeplates)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    Promise.all([initAdminTemplates()])
  }, [])

  const createNewTemplateHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    router.push(PROTECTED_ROUTES.ADMIN_TEMPLATE_CREATE)
  }
  return (
    <MainLayout header="ระบบการยื่นคำร้องเพื่อขอเอกสารสำคัญทางการศึกษา">
      <div tw="mt-5 ml-10 flex-1 mb-3 overflow-auto flex flex-col gap-5">
        <div tw="flex gap-4 items-center">
          <div tw="text-h2 font-h2 text-black">สร้างเทมเพลตเอกสารใหม่:</div>
          <div tw="text-h1 text-cu-pink" onClick={(event) => createNewTemplateHandler(event)}>
            <FontAwesomeIcon icon={faFileCirclePlus} />
          </div>
        </div>
        <div tw="flex flex-col gap-4">
          <div tw="text-h2 font-h2 text-black">เทมเพลตทั้งหมด:</div>
          <div tw="grid grid-cols-1 gap-5 grid-flow-row md:(grid-cols-2)">
            {adminTemplates &&
              adminTemplates.length > 0 &&
              adminTemplates.map((adminTemplate, index) => {
                return (
                  <TemplateCard key={index} title={adminTemplate.title.th} templateType={adminTemplate.templateType} />
                )
              })}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default withAuth(AdminHomePage)
