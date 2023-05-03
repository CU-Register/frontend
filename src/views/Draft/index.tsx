import withAuth from 'components/Auth/withAuth'
import useDocument from 'hooks/useDocument'
import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import { useEffect } from 'react'
import DocumentDraftSection from './sections/DocumentDraftSection'

const DraftPage: NextPage = () => {
  const { fetchHoldingDocuments } = useDocument()

  useEffect(() => {
    fetchHoldingDocuments()
  }, [])
  return (
    <MainLayout header="แก้ไขโครงร่างคำร้อง">
      {/* <SearchAndQuerySection /> */}
      <DocumentDraftSection />
    </MainLayout>
  )
}

export default withAuth(DraftPage)
