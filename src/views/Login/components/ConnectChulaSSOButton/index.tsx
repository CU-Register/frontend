import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'
import 'twin.macro'

const ConnectChulaSSOButton: FC = () => {
  const router = useRouter()
  const connectChulaSSOButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const REDIRECT_URL = new URL(
      `${window.location.protocol}//${window.location.hostname}:${window.location.port}/redirect`,
    )
    const SSO_URL = new URL(process.env.NEXT_PUBLIC_CUSSO_URL as string)
    SSO_URL.searchParams.append('service', REDIRECT_URL.toString())
    router.push(SSO_URL)
  }

  return (
    <button tw="w-[197px] h-[66px] relative" onClick={connectChulaSSOButtonHandler}>
      <Image src="/assets/connect-chula-sso-logo.png" layout="fill" alt="chula-icon" />
    </button>
  )
}

export default ConnectChulaSSOButton
