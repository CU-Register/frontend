import { Language } from 'enums/Language'
import { FC, useState } from 'react'
import 'twin.macro'
import tw from 'twin.macro'

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

export default LanguageToggleSwitch
