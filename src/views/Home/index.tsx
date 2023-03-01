import PinkButton from 'components/PinkButton'
import MainLayout from 'layouts/MainLayout'
import type { NextPage } from 'next'
import Image from 'next/image'
import 'twin.macro'

interface IHomePageProps {}
const HomePage: NextPage<IHomePageProps> = () => {
  const policyButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('policy button clicked')
  }
  const connectChulaSSOButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('connect chula sso button clicked')
  }

  return (
    <MainLayout>
      <div tw="p-10 flex flex-col min-h-full">
        <div>
          <PinkButton text={'ข้อกำหนด'} onClick={policyButtonHandler} />
        </div>
        <div tw="mt-12">
          <div tw="p-6 w-full flex flex-col justify-center items-center gap-20">
            <div tw="text-h1 font-h1 text-black">เข้าสู่ระบบการยื่นคำร้องเพื่อขอเอกสารสำคัญทางการศึกษา</div>
            <div tw="flex flex-col justify-center items-center gap-4">
              <div tw="text-body font-body text-black">กรุณาทำการเข้าสู่ระบบผ่านระบบ Chula SSO</div>
              <button tw="w-[197px] h-[66px] relative" onClick={connectChulaSSOButtonHandler}>
                <Image src="/assets/connect-chula-sso-logo.png" layout="fill" alt="chula-icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="grow" />
        <div tw="text-body font-body text-gray">
          ระบบการยื่นคำร้องเพื่อขอเอกสารสำคัญทางการศึกษา CU Academic Document Request System (CUADRS)
        </div>
      </div>
    </MainLayout>
  )
}
export default HomePage
