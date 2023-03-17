import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'
import 'twin.macro'

const ConnectChulaSSOButton: FC = () => {
  const router = useRouter()
  const connectChulaSSOButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    router.push(process.env.NEXT_PUBLIC_CUSSO_URL as string)
  }

  return (
    <button tw="w-[197px] h-[66px] relative" onClick={connectChulaSSOButtonHandler}>
      <Image src="/assets/connect-chula-sso-logo.png" layout="fill" alt="chula-icon" />
    </button>
  )
}

export default ConnectChulaSSOButton
