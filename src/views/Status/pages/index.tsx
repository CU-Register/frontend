import withAuth from 'components/Auth/withAuth'
import useDocument from 'hooks/useDocument'
import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import { useEffect } from 'react'
import 'twin.macro'
import RequestStatusSection from '../sections/RequestStatusSection'
const StatusPage: NextPage = () => {
  const { fetchHistoryDocuments } = useDocument()

  useEffect(() => {
    fetchHistoryDocuments()
  }, [])

  return (
    <MainLayout header="ตรวจสอบสถานะการยื่นคำร้อง">
      {/* <SearchAndQuerySection /> */}
      <RequestStatusSection />
    </MainLayout>
  )
}

export default withAuth(StatusPage)
