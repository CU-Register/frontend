import { COMMON_ROUTES, PROTECTED_ROUTES } from 'constants/Routes'
import useAuth from 'hooks/useAuth'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'
import tw from 'twin.macro'
import SideMenuButton from './SideMenuButton'
import { UserRole } from 'enums/UserRole'

interface ISideMenu {
  isShow?: boolean
  role?: UserRole
}
const SideMenu: FC<ISideMenu> = (props) => {
  const { logout } = useAuth()
  const router = useRouter()

  const hideProtectedRoutesButton = () => {
    return Object.values(COMMON_ROUTES).includes(router.pathname)
  }

  const isCommonRoutesButton = () => {
    return Object.values(COMMON_ROUTES).includes(router.pathname)
  }

  const homePageButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    router.push('/')
  }

  const requestPageButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    router.push('/request')
  }

  const draftPageButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    router.push('/draft')
  }

  const statusPageButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    router.push('/status')
  }

  const profilePageButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    router.push('/profile')
  }

  const logoutPageButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    logout()
  }

  const isCommon = isCommonRoutesButton()
  const isStudent = props.role == UserRole.STUDENT

  return (
    <div
      css={[
        tw`h-screen w-[280px] transition-all p-[50px] bg-cu-pinkLd shadow-2xl justify-between flex flex-col absolute z-10 md:(relative shadow-none)`,
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
        <div tw="mt-8 flex flex-col items-start gap-5">
          {props.role}
          {/* Common Routes */}
          <SideMenuButton text="เข้าสู่ระบบ" isFocused={router.pathname === COMMON_ROUTES.LOGIN} isShow={isCommon} />

          {/* Protected Routes */}
          <SideMenuButton
            text="หน้าหลัก"
            onClick={homePageButtonHandler}
            isFocused={router.pathname === '/'}
            isShow={isStudent}
          />
          <SideMenuButton
            text="ยื่นคำร้อง"
            onClick={requestPageButtonHandler}
            isFocused={router.pathname.includes(PROTECTED_ROUTES.REQUEST)}
            isShow={isStudent}
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
            text="ข้อมูลผู้ใช้"
            onClick={profilePageButtonHandler}
            isFocused={router.pathname.includes(PROTECTED_ROUTES.PROFILE)}
            isShow={isStudent}
          />
          <SideMenuButton
            text="ออกจากระบบ"
            onClick={logoutPageButtonHandler}
            isFocused={router.pathname.includes(PROTECTED_ROUTES.LOGOUT)}
            isShow={isStudent}
          />
        </div>
      </div>
      {/* <LanguageToggleSwitch /> */}
    </div>
  )
}

export default SideMenu
