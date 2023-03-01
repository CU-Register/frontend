import { FC } from 'react'
import 'twin.macro'
interface IPinkButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  text: string
}

const PinkButton: FC<IPinkButtonProps> = ({ onClick, text }) => {
  return (
    <button
      tw="bg-cu-pink font-h2 text-h2 text-white rounded-md px-2 py-1"
      className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default PinkButton
