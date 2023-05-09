import PreAuthLayout from 'layouts/PreAuthLayout'
import { NextPage } from 'next'
import 'twin.macro'
import ConnectChulaSSOButton from './components/ConnectChulaSSOButton'

interface ILoginPageProps {}
const LoginPage: NextPage<ILoginPageProps> = () => {
  // const policyButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log('policy button clicked')
  // }

  return (
    <PreAuthLayout>
      <div tw="flex flex-col min-h-full">
        {/* <div>
          <PinkButton text={'ข้อกำหนด'} onClick={policyButtonHandler} />
        </div> */}
        <div tw="mt-12">
          <div tw="p-6 w-full flex flex-col justify-center items-center gap-20">
            <div tw="text-h1 font-h1 text-black">เข้าสู่ระบบการยื่นคำร้องเพื่อขอเอกสารสำคัญทางการศึกษา</div>
            <div tw="flex flex-col justify-center items-center gap-4">
              <div tw="text-body font-body text-black">กรุณาทำการเข้าสู่ระบบผ่านระบบ Chula SSO</div>
              <ConnectChulaSSOButton />
            </div>
          </div>
        </div>
      </div>
    </PreAuthLayout>
  )
}
export default LoginPage
