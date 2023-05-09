import withAuth from 'components/Auth/withAuth'
import useDocument from 'hooks/useDocument'
import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import { useEffect } from 'react'
import StaffRequestsTable from '../sections/DocumentDraftSection'

const RequestsPage: NextPage = () => {
  const { fetchHoldingDocuments } = useDocument()

  useEffect(() => {
    fetchHoldingDocuments()
  }, [])
  return (
    <MainLayout header="คำร้องที่รอดำเนินการ">
      {/* <SearchAndQuerySection /> */}
      <StaffRequestsTable />
    </MainLayout>
  )
}

export default withAuth(RequestsPage)
