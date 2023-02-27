import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Listbox } from '@headlessui/react'
import { Language } from 'enums/language'
import Image from 'next/image'
import { FC, useState } from 'react'
import 'twin.macro'
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
      <LanguageListBox />
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

const LanguageListBox: FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(Language.TH)
  return (
    <div>
      <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
        <Listbox.Button
          tw="bg-cu-pink p-2 h-7 text-white text-h2 font-h2 rounded flex flex-row gap-1 items-center"
          className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        >
          <span>{selectedLanguage}</span>
          <FontAwesomeIcon icon={faCaretDown} tw="text-[16px]" />
        </Listbox.Button>
        <Listbox.Options tw="bg-alternateBackground-100 mt-2 rounded w-16">
          <Listbox.Option tw="p-1" value={Language.EN}>
            en
          </Listbox.Option>
          <Listbox.Option tw="p-1" value={Language.TH}>
            th
          </Listbox.Option>
        </Listbox.Options>
      </Listbox>
    </div>
  )
}
