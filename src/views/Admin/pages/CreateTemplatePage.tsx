import { Switch } from '@headlessui/react'
import withAuth from 'components/Auth/withAuth'
import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import { useState } from 'react'
import 'twin.macro'
import tw from 'twin.macro'
import TemplateInput from '../components/TemplateInput'

const AdminCreateTemplatePage: NextPage = () => {
  const [enabled, setEnabled] = useState(false)
  return (
    <MainLayout header="เพิ่มเทมเพลตเอกสาร">
      <div tw="mt-5 ml-10 flex-1 mb-3 overflow-auto">
        <div tw="grid grid-cols-[3fr 1fr] gap-2">
          <div tw="flex flex-col gap-2">
            <TemplateInput label="ชื่อเอกสารภาษาไทย" />
            <TemplateInput label="ชื่อเอกสารภาษาอังกฤษ" />
            <TemplateInput label="หัวข้อ" />
            <TemplateInput label="คำอธิบาย" />
          </div>
          <div tw="flex justify-end">
            <div tw="flex flex-col justify-end gap-1">
              <div tw="font-h2 text-h2 text-black">เปิดการใช้งาน :</div>
              <div tw="flex items-center justify-end">
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  css={[
                    tw`relative inline-flex h-[30px] w-[60px] cursor-pointer rounded-full border-2 border-transparent transition-colors 
                duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`,
                    enabled ? tw`bg-cu-pink` : tw`bg-cu-grey`,
                  ]}
                >
                  <span
                    css={[
                      tw`pointer-events-none  h-[27px] w-[27px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`,
                      enabled ? tw`translate-x-[30px]` : tw`translate-x-0`,
                    ]}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default withAuth(AdminCreateTemplatePage)
