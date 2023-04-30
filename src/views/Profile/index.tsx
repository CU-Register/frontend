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
  const [isEditMode, setIsEditMode] = useState<boolean>(false)
  const { fetchUserProfileOption } = useProfile()
  const { userProfile, userProfileOption, tmpUserProfile, setTmpUserProfile } = useProfileStore()

  console.log('tmpUserProfile', tmpUserProfile)

  useEffect(() => {
    Promise.all([fetchUserProfileOption()])
  }, [])

  const editButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTmpUserProfile(userProfile)
    setIsEditMode(true)
  }

  const confirmEditButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsEditMode(false)
    // TODO: show alert to confirm edit
    // TODO: request update user profile with tmpUserProfile
    // TODO: fetch user profile
    setTmpUserProfile(null)
  }

  const cancelEditButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsEditMode(false)
    // TODO: show alert to cancel edit
    setTmpUserProfile(null)
  }

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
        {!isEditMode && (
          <div className="h-fit">
            <PinkButton text="แก้ไข" onClick={editButtonHandler} />
          </div>
        )}
        {isEditMode && (
          <div tw="flex gap-2" className="h-fit">
            <PinkButton text="ยกเลิก" onClick={cancelEditButtonHandler} />
            <PinkButton text="ตกลง" onClick={confirmEditButtonHandler} />
          </div>
        )}
      </div>
      <div tw="mt-6  grid gap-3" className="grid-cols-[1fr_2px_1fr]">
        <div tw=" flex flex-col gap-2">
          <ProfileDetails
            label="คำนำหน้่าชื่อ"
            value={userProfile?.salutation?.name?.th || '-'}
            isEditMode={isEditMode}
            isEditAsOption
          />
          <ProfileDetails
            label="นิสิตระดับ"
            value={userProfile?.studentLevel.name.th || '-'}
            isEditMode={isEditMode}
            isEditAsOption
          />
          <ProfileDetails
            label="ระบบการศึกษา"
            value={userProfile?.academicSystem.name.th || '-'}
            isEditMode={isEditMode}
            isEditAsOption
          />
          <ProfileDetails
            label="คณะ"
            value={userProfile?.faculty.name.th || '-'}
            isEditMode={isEditMode}
            isEditAsOption
          />
          <ProfileDetails
            label="ภาควิชา/สาขาวิชา"
            value={userProfile?.department.name.th || '-'}
            isEditMode={isEditMode}
            isEditAsOption
          />
        </div>
        <VerticalDivider />
        <div tw="flex flex-col gap-2">
          <ProfileDetails
            label="เบอร์โทรศัพท์"
            profileKey="telephone"
            value={userProfile?.telephone || '-'}
            isEditMode={isEditMode}
            isEditAsTextArea
            editModeDefaultValue={tmpUserProfile?.telephone}
          />
          <ProfileDetails
            label="อีเมล์"
            profileKey="email"
            value={userProfile?.email || '-'}
            isEditMode={isEditMode}
            isEditAsTextArea
            editModeDefaultValue={tmpUserProfile?.email}
          />
          <ProfileDetails
            label="ที่อยู่"
            value={userProfile?.address.th || '-'}
            isEditMode={isEditMode}
            isEditAsTextArea
          />
        </div>
      </div>
    </MainLayout>
  )
}

export default withAuth(ProfilePage)
