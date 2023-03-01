import Divider from 'components/Divider'
import PinkButton from 'components/PinkButton'
import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import 'twin.macro'

const LogoutPage: NextPage = () => {
  return (
    <MainLayout>
      <div tw="font-h1 text-h1 text-black mt-32 flex justify-center">ออกจากระบบเสร็จสิ้น</div>
      <div className="grow" />
      <div tw="flex flex-col items-center gap-2">
        <div tw="text-body font-body text-black">กดปุ่มเพื่อไปหน้าแรก</div>
        <PinkButton text={'ตกลง'} />
      </div>
      <Divider />
      <div tw="mt-5 font-body text-body text-black">
        นิสิตสามารถติดต่อเรื่องการยื่นคำร้องเพื่อขอเอกสารสำคัญทางการศึกษา ได้ที่สำนักบริหารเทคโนโลยีสารสนเทศ
        อาคารจามจุรี 3 ชั้น 4. โทร. 02- 218-3314 อีเมล์ help@chula.ac.th
      </div>
    </MainLayout>
  )
}

export default LogoutPage
