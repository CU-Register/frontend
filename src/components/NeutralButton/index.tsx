import Image from 'next/image'
import { FC } from 'react'
import 'twin.macro'
interface INeutralButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  icon?: React.ReactNode
  iconSrc?: string
  text: string
}

const NeutralButton: FC<INeutralButtonProps> = ({ onClick, icon, iconSrc, text }) => {
  return (
    <button
      tw="font-h3 text-h3 text-gray rounded-md px-3 py-1 flex items-center gap-1 hover:text-black"
      onClick={onClick}
    >
      {iconSrc && (
        <div tw="w-5 h-5 relative">
          <Image src={iconSrc} layout="fill" alt="neutral-button-icon" />
        </div>
      )}
      <div>{text}</div>
    </button>
  )
}

export default NeutralButton
