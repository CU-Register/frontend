import { COMMON_ROUTES, PROTECTED_ROUTES } from 'constants/Routes'
import useAuth from 'hooks/useAuth'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'
import 'twin.macro'
import LanguageToggleSwitch from './LanguageToggleSwitch'
import SideMenuButton from './SideMenuButton'

interface ISideMenu {}
const SideMenu: FC<ISideMenu> = () => {
  const { logout } = useAuth()
  const router = useRouter()

  const hideProtectedRoutesButton = () => {
    return Object.values(COMMON_ROUTES).includes(router.pathname)
  }

  const hideCommonRoutesButton = () => {
    return !Object.values(COMMON_ROUTES).includes(router.pathname)
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

  return (
    <div tw="h-screen w-[280px] p-[50px] bg-cu-pinkLd  justify-between flex flex-col">
      <div tw="w-full">
        <div tw="flex flex-col justify-center items-center">
          <div tw="w-[83px] h-[126px] relative">
            <Image src="/assets/chula-icon.png" layout="fill" alt="chula-icon" />
          </div>
          <div tw="text-h1 font-h1 text-white">CUADRS</div>
        </div>
        <div tw="mt-8 flex flex-col items-start gap-5">
          {/* Common Routes */}
          <SideMenuButton
            text="เข้าสู่ระบบ"
            isFocused={router.pathname === COMMON_ROUTES.LOGIN}
            hidden={hideCommonRoutesButton()}
          />

          {/* Protected Routes */}
          <SideMenuButton
            text="หน้าหลัก"
            onClick={homePageButtonHandler}
            isFocused={router.pathname === '/'}
            hidden={hideProtectedRoutesButton()}
          />
          <SideMenuButton
            text="ยิื่นคำร้อง"
            onClick={requestPageButtonHandler}
            isFocused={router.pathname.includes(PROTECTED_ROUTES.REQUEST)}
            hidden={hideProtectedRoutesButton()}
          />
          <SideMenuButton
            text="โครงร่างคำร้อง"
            onClick={draftPageButtonHandler}
            isFocused={router.pathname.includes(PROTECTED_ROUTES.DRAFT)}
            hidden={hideProtectedRoutesButton()}
          />
          <SideMenuButton
            text="ตรวจสอบสถานะ"
            onClick={statusPageButtonHandler}
            isFocused={router.pathname.includes(PROTECTED_ROUTES.STATUS)}
            hidden={hideProtectedRoutesButton()}
          />
          <SideMenuButton
            text="ข้อมูลผู้ใช้"
            onClick={profilePageButtonHandler}
            isFocused={router.pathname.includes(PROTECTED_ROUTES.PROFILE)}
            hidden={hideProtectedRoutesButton()}
          />
          <SideMenuButton
            text="ออกจากระบบ"
            onClick={logoutPageButtonHandler}
            isFocused={router.pathname.includes(PROTECTED_ROUTES.LOGOUT)}
            hidden={hideProtectedRoutesButton()}
          />
        </div>
      </div>
      <LanguageToggleSwitch />
    </div>
  )
}

export default SideMenu
