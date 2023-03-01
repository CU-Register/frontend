import { Language } from 'enums/language'
import Image from 'next/image'
import { FC, useState } from 'react'
import 'twin.macro'
import tw from 'twin.macro'
interface ISideMenu {}
const SideMenu: FC<ISideMenu> = () => {
  const homePageButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('mainPageButtonHandler')
  }

  const requestPageButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('requestPageButtonHandler')
  }

  const draftPageButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('draftPageButtonHandler')
  }

  const statusPageButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('statusPageButtonHandler')
  }

  const profilePageButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('profilePageButtonHandler')
  }

  return (
    <div tw="h-full w-[280px] p-[50px] bg-cu-pinkLd flex flex-col justify-between">
      <div tw="w-full">
        <div tw="flex flex-col justify-center items-center w-full">
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
        </div>
      </div>
      <LanguageToggleSwitch />
    </div>
  )
}

export default SideMenu

interface ISideMenuButtonProps {
  text: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
const SideMenuButton: FC<ISideMenuButtonProps> = ({ text, onClick }) => {
  return (
    <button tw="font-h2 text-h2 text-white hover:text-cu-pink" onClick={onClick}>
      {text}
    </button>
  )
}

const LanguageToggleSwitch: FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(Language.TH)

  const thLanguageButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedLanguage(Language.TH)
  }

  const enLanguageButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedLanguage(Language.EN)
  }

  return (
    <div tw="bg-cu-pink w-16 h-6 p-[1px] rounded-xl flex justify-between items-center">
      <button
        css={[
          tw`text-h3 font-h3 w-[50%] flex justify-center rounded-xl text-white`,
          selectedLanguage == Language.TH && tw`text-cu-pink bg-white`,
        ]}
        onClick={thLanguageButtonHandler}
      >
        TH
      </button>
      <button
        css={[
          tw`text-h3 font-h3 w-[50%] flex justify-center rounded-xl text-white`,
          selectedLanguage == Language.EN && tw`text-cu-pink bg-white`,
        ]}
        onClick={enLanguageButtonHandler}
      >
        EN
      </button>
    </div>
  )
}
