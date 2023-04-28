import withAuth from 'components/Auth/withAuth'
import VerticalDivider from 'components/Dividers/VerticalDivider'
import PinkButton from 'components/PinkButton'
import MainLayout from 'layouts/MainLayout'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import userProfileService from 'services/user-profile.service'
import 'twin.macro'
import ProfileDetails from './components/ProfileDetails'

const ProfilePage: NextPage = () => {
  const { getUserProfile } = userProfileService
  useEffect(() => {
    getUserProfile()
  })
  return (
    <MainLayout header="ข้อมูลทั่วไปและส่วนบุคคล" studentId="6231354721">
      <div tw=" flex justify-between">
        <div tw=" flex flex-col justify-between">
          <div tw="flex gap-12">
            <div tw="font-h2 text-h2 text-black">ชื่อ-นามสกุล</div>
            <div tw="flex flex-col font-h1 text-h1 text-black">
              <div>พันธ์ุธัช ศิริวัน</div>
              <div>Mr. Punthat Siriwan</div>
            </div>
          </div>
          <div tw="max-w-[54px]">
            <PinkButton text="แก้ไข" />
          </div>
        </div>
      </div>
      <div tw="mt-6  grid gap-3" className="grid-cols-[1fr_2px_1fr]">
        <div tw=" flex flex-col gap-2">
          <ProfileDetails label="ระบบการศึกษา" value="ทวิภาค" />
          <ProfileDetails label="ระดับการศึกษา" value="ปริญญาตรี" />
          <ProfileDetails label="หลักสูตร" value="วิศวกรรมศาสตร์บัณฑิต" valueColor="text-gray" />
          <ProfileDetails label="คณะ" value="คณะวิศวกรรมศาสตร์" />
          <ProfileDetails label="ภาควิชา" value="วิศวกรรมคอมพิวเตอร์" />
        </div>
        <VerticalDivider />
        <div tw="flex flex-col gap-2">
          <ProfileDetails label="ที่อยู่" value="254 ถนนพญาไท แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330" />
          <ProfileDetails label="เบอร์โทรศัพท์" value="061 447 5178" />
          <ProfileDetails label="อีเมล์" value="sudlhorpromptleaw@gmail.com" />
        </div>
      </div>
    </MainLayout>
  )
}

export default withAuth(ProfilePage)
