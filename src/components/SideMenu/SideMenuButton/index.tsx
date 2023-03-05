import { FC } from 'react'
import 'twin.macro'

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

export default SideMenuButton
