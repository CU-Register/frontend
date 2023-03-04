import VerticalDivider from 'components/Dividers/VerticalDivider'
import PinkButton from 'components/PinkButton'
import MainLayout from 'layouts/MainLayout'
import type { NextPage } from 'next'
import Image from 'next/image'
import 'twin.macro'
import ProfileDetails from './components/ProfileDetails'
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
      <div tw="mt-6 bg-green-300 grid gap-1" className="grid-cols-[1fr_2px_1fr]">
        <div tw="bg-normal-100 flex flex-col gap-2">
          <ProfileDetails label="ระบบการศึกษา" value="ทวิภาค" />
          <ProfileDetails label="ระดับการศึกษา" value="ปริญญาตรี" />
          <ProfileDetails label="หลักสูตร" value="วิศวกรรมศาสตร์บัณฑิต" valueColor="text-gray" />
          <ProfileDetails label="คณะ" value="คณะวิศวกรรมศาสตร์" />
          <ProfileDetails label="ภาควิชา" value="วิศวกรรมคอมพิวเตอร์" />
          <ProfileDetails label="วิชาเอก/โท" value="วิชาเอกไม่มี วิชาโทไม่มี" />
          <div tw="mt-10">
            <ProfileDetails label="สถานภาพ" value="ปกติ" valueColor="text-green-600" />
          </div>
        </div>
        <VerticalDivider />
        <div tw="bg-interactive-100 flex flex-col gap-2">
          <ProfileDetails label="ที่อยู่" value="254 ถนนพญาไท แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330" />
          <ProfileDetails label="เบอร์โทรศัพท์" value="061 447 5178" />
          <ProfileDetails label="อีเมล์" value="sudlhorpromptleaw@gmail.com" />
        </div>
      </div>
    </MainLayout>
  )
}

export default ProfilePage
