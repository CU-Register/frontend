import Image from 'next/image'
import { FC } from 'react'
import 'twin.macro'

const ConnectChulaSSOButton: FC = () => {
  const connectChulaSSOButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('connect chula sso button clicked')
  }

  return (
    <button tw="w-[197px] h-[66px] relative" onClick={connectChulaSSOButtonHandler}>
      <Image src="/assets/connect-chula-sso-logo.png" layout="fill" alt="chula-icon" />
    </button>
  )
}

export default ConnectChulaSSOButton
