import Image from 'next/image'
import { FC } from 'react'
import 'twin.macro'

const Stepper: FC = () => {
  return (
    <div>
      <div>
        <div tw="flex gap-10 items-center">
          <div tw="bg-cu-pink w-10 h-10 rounded-full" />
          <div tw="font-h2 text-h2 text-cu-pink">เจ้าหน้าที่ทะเบียน</div>
        </div>
        <div tw="ml-[calc(1.25rem - 1px)] border-l-2 border-cu-pink  pl-[calc(5rem - 1.25rem)] min-h-[70px]">
          <div tw="font-h3 text-h3 text-cu-grey">พ้่นธุ์ธัช ศิริวัน</div>
          <div tw="font-h3 text-h3 text-cu-grey">ส่งเมื่อ: 12/12/2023, 23:00</div>
        </div>
      </div>
      <div>
        <div tw="flex gap-10 items-center">
          <div tw="bg-cu-pink w-10 h-10 rounded-full" />
          <div tw="font-h2 text-h2 text-cu-pink">อาจารย์ที่ปรึกษา</div>
        </div>
        <div tw="ml-[calc(1.25rem - 1px)] border-l-2 border-cu-pink  pl-[calc(5rem - 1.25rem)] min-h-[70px]">
          <div tw="font-h3 text-h3 text-cu-grey">ศ. ปิยะพัทธ์ ภิญโญ</div>
          <div tw="font-h3 text-h3 text-cu-grey">ส่งเมื่อ: 12/12/2023, 23:00</div>
        </div>
      </div>
      <div>
        <div tw="flex gap-10 items-center">
          <div tw="bg-cu-pink w-10 h-10 rounded-full" />
          <div tw="font-h2 text-h2 text-cu-pink">คณบตี</div>
        </div>
        <div tw="ml-[calc(1.25rem - 1px)] border-l-2 border-cu-pink  pl-[calc(5rem - 1.25rem)] min-h-[70px]">
          <div tw="font-h3 text-h3 text-cu-grey">ศ. รัชชานนท์ วัฒนทวีกุล</div>
          <div tw="font-h3 text-h3 text-cu-grey">ส่งเมื่อ: 12/12/2023, 23:00</div>
        </div>
      </div>
      <div>
        <div tw="flex gap-10 items-center">
          <div tw="bg-cu-pink w-10 h-10 rounded-full" />
          <div tw="font-h2 text-h2 text-cu-pink">อธิการบติ</div>
        </div>
        <div tw="ml-[calc(1.25rem - 1px)] border-l-2 border-cu-pink  pl-[calc(5rem - 1.25rem)] min-h-[80px]">
          <div tw="font-h3 text-h3 text-cu-grey">พ้่นธุ์ธัช ศิริวัน</div>
          <div tw="font-h3 text-h3 text-cu-grey">ส่งเมื่อ: 12/12/2023, 23:00</div>
        </div>
      </div>
      <div>
        <div tw="flex gap-10 items-center">
          <div tw="bg-cu-pink w-10 h-10 rounded-full relative flex justify-center items-center">
            <Image src="/assets/checkmark.png" width={25} height={(25 * 28) / 37} alt="chula-icon" />
          </div>
          <div tw="font-h2 text-h2 text-cu-pink">ดำเนินการเสร็จสิ้น</div>
        </div>
        <div tw="ml-[calc(1.25rem - 1px)]  pl-[calc(5rem - 1.25rem)] min-h-[70px]">
          <div tw="font-h3 text-h3 text-cu-grey">อนุมัติเมื่อ: 12/12/2023, 23:00</div>
        </div>
      </div>
    </div>
  )
}

export default Stepper
