import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { COMMON_ROUTES, PROTECTED_ROUTES } from 'constants/Routes'
import { UserRole } from 'enums/UserRole'
import useAuth from 'hooks/useAuth'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { useProfileStore } from 'stores/profile.store'
import tw from 'twin.macro'
import { fullNameFormatterWithoutPlaceholder } from 'utils/formats'
import SideMenuButton from './SideMenuButton'

interface ISideMenu {
  isShow?: boolean
  role?: UserRole
}
const SideMenu: FC<ISideMenu> = (props) => {
  const { logout } = useAuth()
  const router = useRouter()
  const { userProfile } = useProfileStore()

  const hideProtectedRoutesButton = () => {
    return Object.values(COMMON_ROUTES).includes(router.pathname)
  }

  const isCommonRoutesButton = () => {
    return Object.values(COMMON_ROUTES).includes(router.pathname)
  }

  const pushToPageHandler = (path: string) => {
    return (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      router.push(path)
    }
  }

  const homePageButtonHandler = pushToPageHandler('/')

  const requestPageButtonHandler = pushToPageHandler('/request')

  const actionPageButtonHandler = pushToPageHandler('/staff/request')

  const draftPageButtonHandler = pushToPageHandler('/draft')

  const statusPageButtonHandler = pushToPageHandler('/status')

  const profilePageButtonHandler = pushToPageHandler('/profile')

  const adminHomePageButtonHandler = pushToPageHandler('/admin')

  const adminCreateTemplatePageButtonHandler = pushToPageHandler('/admin/template/create')

  const logoutPageButtonHandler = () => {
    logout()
  }

  const isCommon = isCommonRoutesButton()
  const isStudent = userProfile?.role === UserRole.STUDENT
  const isStaff = userProfile?.role === UserRole.FACULTY
  const isAdmin = userProfile?.role === UserRole.ADMIN
  const abbreviationName = (userProfile?.firstname.en.at(0) ?? 'C') + (userProfile?.lastname.en.at(0) ?? 'U')

  return (
    <div
      css={[
        tw`h-screen w-[280px] transition-all py-[50px] bg-cu-pinkLd shadow-2xl justify-between flex flex-col absolute z-10 md:(relative shadow-none)`,
        !props.isShow && tw`-translate-x-full md:(translate-x-0)`,
      ]}
    >
      <div tw="w-full">
        <div tw="flex flex-col justify-center items-center">
          <div tw="w-[83px] h-[126px] relative">
            <Image src="/assets/chula-icon.png" layout="fill" alt="chula-icon" />
          </div>
          <div tw="text-h1 font-h1 text-white">CUADRS</div>
        </div>
        <div tw="mt-8 flex flex-col items-start gap-5 min-w-[280px] w-full">
          {/* Common Routes */}
          <SideMenuButton text="เข้าสู่ระบบ" isFocused={router.pathname === COMMON_ROUTES.LOGIN} isShow={isCommon} />

          {/* Protected Routes */}

          {/* student and faculty */}
          <SideMenuButton
            text="หน้าหลัก"
            onClick={homePageButtonHandler}
            isFocused={router.pathname === '/'}
            isShow={isStudent || isStaff}
          />
          <SideMenuButton
            text="ยื่นคำร้อง"
            onClick={requestPageButtonHandler}
            isFocused={router.pathname.includes(PROTECTED_ROUTES.REQUEST)}
            isShow={isStudent}
          />
          <SideMenuButton
            text="คำร้องที่รอดำเนินการ"
            onClick={actionPageButtonHandler}
            isFocused={router.pathname.includes(PROTECTED_ROUTES.STAFF_REQUEST)}
            isShow={isStaff}
          />
          <SideMenuButton
            text="โครงร่างคำร้อง"
            onClick={draftPageButtonHandler}
            isFocused={router.pathname.includes(PROTECTED_ROUTES.DRAFT)}
            isShow={isStudent}
          />
          <SideMenuButton
            text="ตรวจสอบสถานะ"
            onClick={statusPageButtonHandler}
            isFocused={router.pathname.includes(PROTECTED_ROUTES.STATUS)}
            isShow={isStudent}
          />
          <SideMenuButton
            text="ประวัติคำร้อง"
            onClick={statusPageButtonHandler}
            isFocused={router.pathname.includes(PROTECTED_ROUTES.STATUS)}
            isShow={isStaff}
          />
          <SideMenuButton
            text="ข้อมูลผู้ใช้"
            onClick={profilePageButtonHandler}
            isFocused={router.pathname.includes(PROTECTED_ROUTES.PROFILE)}
            isShow={isStudent}
          />

          {/* admin */}
          <SideMenuButton
            text="หน้าหลัก"
            onClick={adminHomePageButtonHandler}
            isFocused={router.pathname === PROTECTED_ROUTES.ADMIN_HOME}
            isShow={isAdmin}
          />
          <SideMenuButton
            text="เพิ่มเทมเพลตเอกสาร"
            onClick={adminCreateTemplatePageButtonHandler}
            isFocused={router.pathname === PROTECTED_ROUTES.ADMIN_TEMPLATE_CREATE}
            isShow={isAdmin}
          />
        </div>
      </div>
      <div tw="absolute px-6 bottom-6 flex h-12 w-full justify-between items-center text-white">
        <div tw="flex items-start justify-center">
          <div tw="w-12 h-12 bg-white mr-2 rounded-xl flex justify-center items-center">
            <span tw="text-h1 font-h1 text-cu-pinkLd">{abbreviationName}</span>
          </div>
          <div>
            <div tw="text-h2 font-h2">
              {fullNameFormatterWithoutPlaceholder(userProfile?.firstname.en, userProfile?.lastname.en)}
            </div>
            <div tw="text-h3">{userProfile?.uid}</div>
          </div>
        </div>
        {userProfile && (
          <div tw="text-[24px] rotate-180 cursor-pointer hover:text-cu-pink/20">
            <FontAwesomeIcon icon={faRightFromBracket} onClick={logoutPageButtonHandler} />
          </div>
        )}
      </div>
      {/* <LanguageToggleSwitch /> */}
    </div>
  )
}

export default SideMenu
