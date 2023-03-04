import PinkButton from 'components/PinkButton'
import MainLayout from 'layouts/MainLayout'
import type { NextPage } from 'next'
import Image from 'next/image'
import 'twin.macro'
const ProfilePage: NextPage = () => {
  return (
    <MainLayout header="ข้อมูลทั่วไปและส่วนบุคคล" studentId="6231354721">
      <div tw="bg-cu-copper flex justify-between">
        <div tw="bg-cu-pinkLd flex flex-col justify-between">
          <div tw="flex gap-12">
            <div tw="font-h2 text-h2 text-black">ชื่อ-นามสกุล</div>
            <div tw="flex flex-col font-h1 text-h1 text-black">
              <div>พันธ์ุธัช ศิริวัน</div>
              <div>Mr. Punthat Siriwan</div>
            </div>
          </div>
          <div tw="max-w-[54px]">
            <PinkButton text="แก้ไข" />
          </div>
        </div>
        <div tw="bg-cu-gold">
          <div tw="w-[129px] h-[178px] relative">
            <Image src="/assets/mock-profile-pic.png" layout="fill" alt="chula-icon" />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default ProfilePage
