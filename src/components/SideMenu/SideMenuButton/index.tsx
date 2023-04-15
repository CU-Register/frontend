import { FC } from 'react'
import 'twin.macro'
import tw from 'twin.macro'

interface ISideMenuButtonProps {
  text: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  isFocused: boolean
  hidden: boolean
}
const SideMenuButton: FC<ISideMenuButtonProps> = ({ text, onClick, isFocused, hidden }) => {
  return (
    <button
      css={[tw`font-h2 text-h2 text-white hover:text-cu-pink`, isFocused && tw`text-cu-pink`, hidden && tw`hidden`]}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default SideMenuButton
