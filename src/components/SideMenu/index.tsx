import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'
import 'twin.macro'
import LanguageToggleSwitch from './LanguageToggleSwitch'
import SideMenuButton from './SideMenuButton'

interface ISideMenu {}
const SideMenu: FC<ISideMenu> = () => {
  const router = useRouter()

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
    router.push('/logout')
  }

  return (
    <div tw="min-h-screen w-[280px] p-[50px] bg-cu-pinkLd  justify-between flex flex-col">
      <div tw="w-full">
        <div tw="flex flex-col justify-center items-center">
          <div tw="w-[83px] h-[126px] relative">
            <Image src="/assets/chula-icon.png" layout="fill" alt="chula-icon" />
          </div>
          <div tw="text-h1 font-h1 text-white">CUADRS</div>
        </div>
        <div tw="mt-8 flex flex-col items-start gap-5">
          <SideMenuButton text="หน้าหลัก" onClick={homePageButtonHandler} />
          <SideMenuButton text="ยิื่นคำร้อง" onClick={requestPageButtonHandler} />
          <SideMenuButton text="โครงร่างคำร้อง" onClick={draftPageButtonHandler} />
          <SideMenuButton text="ตรวจสอบสถานะ" onClick={statusPageButtonHandler} />
          <SideMenuButton text="ข้อมูลผู้ใช้" onClick={profilePageButtonHandler} />
          <SideMenuButton text="ออกจากระบบ" onClick={logoutPageButtonHandler} />
        </div>
      </div>
      <LanguageToggleSwitch />
    </div>
  )
}

export default SideMenu
