import PinkButton from 'components/PinkButton'
import PreAuthLayout from 'layouts/PreAuthLayout'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import 'twin.macro'

const LogoutPage: NextPage = () => {
  const router = useRouter()

  const toLoginPageButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    router.push('/login')
  }

  return (
    <PreAuthLayout>
      <div tw="font-h1 text-h1 text-black mt-32 flex justify-center">ออกจากระบบเสร็จสิ้น</div>
      <div className="grow" />
      <div tw="flex flex-col items-center gap-2 mb-10">
        <div tw="text-body font-body text-black">กดปุ่มเพื่อไปหน้าแรก</div>
        <PinkButton text={'ตกลง'} onClick={toLoginPageButtonHandler} />
      </div>
    </PreAuthLayout>
  )
}

export default LogoutPage
