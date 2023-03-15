import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'

const CheckStatusPage: NextPage = () => {
  return (
    <MainLayout header="ตรวจสอบสถานะการยื่นคำร้อง" studentId="6231354721">
      Check Status Page
    </MainLayout>
  )
}

export default CheckStatusPage
