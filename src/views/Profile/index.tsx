import withAuth from 'components/Auth/withAuth'
import VerticalDivider from 'components/Dividers/VerticalDivider'
import PinkButton from 'components/PinkButton'
import useProfile from 'hooks/useProfile'
import MainLayout from 'layouts/MainLayout'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useProfileStore } from 'stores/profile.stores'
import 'twin.macro'
import { fullNameFormatter } from 'utils/formats'
import ProfileDetails from './components/ProfileDetails'
const ProfilePage: NextPage = () => {
  const [isUserEditMode, setIsUserEditMode] = useState<boolean>(false)
  const { fetchUserProfile, fetchUserProfileOption } = useProfile()
  const { userProfile, userProfileOption } = useProfileStore()

  useEffect(() => {
    Promise.all([fetchUserProfileOption()])
  }, [])

  return (
    <MainLayout header="ข้อมูลทั่วไปและส่วนบุคคล">
      <div tw=" flex justify-between">
        <div tw=" flex flex-col justify-between">
          <div tw="flex gap-12  items-center">
            <div tw="font-h2 text-h2 text-black">ชื่อ-นามสกุล</div>
            <div tw="flex flex-col font-h1 text-h1 text-black">
              <div>{fullNameFormatter(userProfile?.firstname?.th, userProfile?.lastname?.th)}</div>
              <div>{fullNameFormatter(userProfile?.firstname.en, userProfile?.lastname.en)}</div>
            </div>
          </div>
        </div>
        <div>
          <PinkButton text="แก้ไข" />
        </div>
      </div>
      <div tw="mt-6  grid gap-3" className="grid-cols-[1fr_2px_1fr]">
        <div tw=" flex flex-col gap-2">
          <ProfileDetails label="คำนำหน้่าชื่อ" value={userProfile?.salutation?.name?.th || '-'} />
          <ProfileDetails label="นิสิตระดับ" value={userProfile?.studentLevel.name.th || '-'} />
          <ProfileDetails label="ระบบการศึกษา" value={userProfile?.academicSystem.name.th || '-'} />
          {/* <ProfileDetails label="หลักสูตร" value={userProfile?.department.name.th || '-'} /> */}
          <ProfileDetails label="คณะ" value={userProfile?.faculty.name.th || '-'} />
          <ProfileDetails label="ภาควิชา/สาขาวิชา" value={userProfile?.department.name.th || '-'} />
        </div>
        <VerticalDivider />
        <div tw="flex flex-col gap-2">
          <ProfileDetails label="เบอร์โทรศัพท์" value={userProfile?.telephone || '-'} />
          <ProfileDetails label="อีเมล์" value={userProfile?.email || '-'} />
          <ProfileDetails label="ที่อยู่" value={userProfile?.address.th || '-'} />
        </div>
      </div>
    </MainLayout>
  )
}

export default withAuth(ProfilePage)
