import withAuth from 'components/Auth/withAuth'
import VerticalDivider from 'components/Dividers/VerticalDivider'
import PinkButton from 'components/PinkButton'
import useProfile from 'hooks/useProfile'
import MainLayout from 'layouts/MainLayout'
import _ from 'lodash'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useProfileStore } from 'stores/profile.stores'
import 'twin.macro'
import { fullNameFormatter } from 'utils/formats'
import ProfileDetails from './components/ProfileDetails'
const ProfilePage: NextPage = () => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false)
  const { fetchUserProfileOption, fetchUserProfile, updateUserProfile } = useProfile()
  const { userProfile, userProfileOption, tmpUserProfile, setTmpUserProfile } = useProfileStore()

  useEffect(() => {
    Promise.all([fetchUserProfileOption()])
  }, [])

  const editButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTmpUserProfile(userProfile)
    setIsEditMode(true)
  }

  const confirmEditButtonHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsEditMode(false)
    // TODO: show alert to confirm edit
    if (tmpUserProfile) {
      await updateUserProfile(tmpUserProfile)
    }
    setTmpUserProfile(null)
    await fetchUserProfile()
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
            optionKey="salutation"
            value={userProfile?.salutation?.name?.th || '-'}
            isEditMode={isEditMode}
            isEditAsOption
            editOptions={userProfileOption?.salutations}
          />
          <ProfileDetails
            label="นิสิตระดับ"
            optionKey="studentLevel"
            value={userProfile?.studentLevel.name.th || '-'}
            isEditMode={isEditMode}
            isEditAsOption
            editOptions={userProfileOption?.studentLevels}
          />
          <ProfileDetails
            label="ระบบการศึกษา"
            optionKey="academicSystem"
            value={userProfile?.academicSystem.name.th || '-'}
            isEditMode={isEditMode}
            isEditAsOption
            editOptions={userProfileOption?.academicSystems}
          />
          <ProfileDetails
            label="คณะ"
            optionKey="faculty"
            value={userProfile?.faculty.name.th || '-'}
            isEditMode={isEditMode}
            isEditAsOption
            editOptions={_.map(userProfileOption?.faculties, (faculty) => _.pick(faculty, ['id', 'name']))}
          />
          <ProfileDetails
            label="ภาควิชา/สาขาวิชา"
            optionKey="department"
            value={userProfile?.department.name.th || '-'}
            isEditMode={isEditMode}
            isEditAsOption
            editOptions={_.find(userProfileOption?.faculties, { id: tmpUserProfile?.faculty.id })?.departments}
          />
        </div>
        <VerticalDivider />
        <div tw="flex flex-col gap-2">
          <ProfileDetails
            label="เบอร์โทรศัพท์"
            inputKey="telephone"
            value={userProfile?.telephone || '-'}
            isEditMode={isEditMode}
            isEditAsInput
            editModeDefaultValue={tmpUserProfile?.telephone}
          />
          <ProfileDetails
            label="อีเมล์"
            inputKey="email"
            value={userProfile?.email || '-'}
            isEditMode={isEditMode}
            isEditAsInput
            editModeDefaultValue={tmpUserProfile?.email}
          />
          <ProfileDetails
            label="ที่อยู่"
            inputKey="address"
            value={userProfile?.address || '-'}
            isEditMode={isEditMode}
            isEditAsTextArea
            editModeDefaultValue={tmpUserProfile?.address}
          />
        </div>
      </div>
    </MainLayout>
  )
}

export default withAuth(ProfilePage)
