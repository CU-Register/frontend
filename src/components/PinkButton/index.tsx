import { FC } from 'react'
import 'twin.macro'
interface IPinkButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  text: string
  disabled?: boolean
}

const PinkButton: FC<IPinkButtonProps> = ({ onClick, text, disabled }) => {
  return (
    <button
      tw="bg-cu-pink font-h2 text-h2 text-white rounded-md px-6 py-1 disabled:(bg-cu-grey cursor-not-allowed) "
      className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default PinkButton
