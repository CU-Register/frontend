import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import 'twin.macro'
import RequestCard from './components/RequestCard'

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <div tw="flex flex-col gap-8">
        <div>
          <div tw="text-h1 font-h1 text-cu-pink">ระบบการยื่นคำร้องเพื่อขอเอกสารสำคัญทางการศึกษา</div>
          <div tw="mt-2 text-h2 font-h2 text-black pl-4">เลขประจำตัว: 6231342121</div>
        </div>
        <div tw="flex flex-col gap-2">
          <div tw="font-h2 text-h2 text-black">คลิ้กเพื่อยื่นคำร้อง</div>
          <div tw="grid grid-cols-2 grid-flow-row gap-5 px-[100px]">
            <RequestCard requestName="คำร้องที่ขอเข้าสังกัด หรือเปลี่ยนสังกัด" requestNumber={5} />
            <RequestCard requestName="คำร้องขอลาออก" requestNumber={31} />
            <RequestCard requestName="คำร้องที่เป็นที่นิยม 1" requestNumber={1} />
            <RequestCard requestName="คำร้องแนะนำที่ 2" requestNumber={99} />
            <RequestCard requestName="คำร้องขอลงทะเบียนเรียน" requestNumber={46} />
            <RequestCard requestName="เขียนคำร้องอื่น ๆ" />
          </div>
        </div>
        <div tw="bg-cu-copper flex flex-col gap-2">
          <div tw="font-h2 text-h2 text-black">ประวัติการยื่นคำร้อง</div>
        </div>
      </div>
    </MainLayout>
  )
}

export default HomePage
