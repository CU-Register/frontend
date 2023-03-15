import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import 'twin.macro'
const CheckStatusPage: NextPage = () => {
  return (
    <MainLayout header="ตรวจสอบสถานะการยื่นคำร้อง" studentId="6231354721">
      <div tw="flex w-full">
        <div tw="flex flex-col gap-10 w-[70%]">
          <div tw="font-h1 text-h1 text-black">คำร้องที่ขอเข้าสังกัดหรือเปลี่ยนสังกัด (จท12)</div>
          <div tw="flex flex-col gap-3 pl-5 text-h2 font-h2 text-black">
            <div tw="grid grid-cols-2">
              <div>วันที่ยื่นคำร้อง</div>
              <div>14 ก.ค. 2562</div>
            </div>
            <div tw="grid grid-cols-2">
              <div>เวลาที่ืยื่นคำร้อง</div>
              <div>23.42 น.</div>
            </div>
          </div>
          <div tw="flex flex-col gap-3 pl-5 text-h2 font-h2 text-black">
            <div tw="grid grid-cols-2">
              <div>สถานะคำร้อง</div>
              <div>กำลังดำเนินการ</div>
            </div>
            <div tw="grid grid-cols-2">
              <div>การดำเนินการคำร้องของท่าน</div>
              <div>ส่งต่อ</div>
            </div>
          </div>
        </div>
        <div tw="flex flex-col w-[30%] bg-cu-gold">for stepper</div>
      </div>
    </MainLayout>
  )
}

export default CheckStatusPage
