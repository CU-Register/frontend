import withAuth from 'components/Auth/withAuth'
import useTemplate from 'hooks/useTemplate'
import MainLayout from 'layouts/MainLayout'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import 'twin.macro'
import TemplateListSection from './sections/TemplateListSection'

const RequestPage: NextPage = () => {
  const { fetchTemplates } = useTemplate()

  useEffect(() => {
    fetchTemplates()
  }, [])

  return (
    <MainLayout header="ยื่นคำร้องเพื่อขอเอกสารสำคัญทางการศึกษา">
      {/* <SearchAndQuerySection /> */}
      <TemplateListSection />
    </MainLayout>
  )
}

export default withAuth(RequestPage)
