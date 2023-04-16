import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import 'twin.macro'
import RequestCard from '../../components/RequestCard'
import RequestHistoryTable from './components/RequestHistoryTable'

const HomePage: NextPage = () => {
  const router = useRouter()

  const otherRequestButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    router.push('/request')
  }

  return (
    <MainLayout header="ระบบการยื่นคำร้องเพื่อขอเอกสารสำคัญทางการศึกษา" studentId="6231354721">
      <div tw="flex flex-col gap-8">
        <div tw="flex flex-col gap-2">
          <div tw="font-h2 text-h2 text-black">คลิ้กเพื่อยื่นคำร้อง</div>
          <div tw="grid grid-cols-1 gap-4 grid-flow-row md:(grid-cols-2)">
            <RequestCard requestName="คำร้องที่ขอเข้าสังกัด หรือเปลี่ยนสังกัด" requestNumber={5} />
            <RequestCard requestName="คำร้องขอลาออก" requestNumber={31} />
            <RequestCard requestName="คำร้องที่เป็นที่นิยม 1" requestNumber={1} />
            <RequestCard requestName="คำร้องแนะนำที่ 2" requestNumber={99} />
            <RequestCard requestName="คำร้องขอลงทะเบียนเรียน" requestNumber={46} />
            <RequestCard requestName="เขียนคำร้องอื่น ๆ" onClick={otherRequestButtonHandler} />
          </div>
        </div>
        <div tw="flex flex-col gap-4">
          <div tw="font-h2 text-h2 text-black">ประวัติการยื่นคำร้อง</div>
          <div tw="px-[100px]">
            <RequestHistoryTable />
          </div>
          <div tw="px-[100px]">
            <button tw="font-h2 text-h2 text-cu-pink">{'ดูประวัติคำร้องอื่น ๆ >>'}</button>
          </div>
        </div>
        ​
      </div>
    </MainLayout>
  )
}

export default HomePage
