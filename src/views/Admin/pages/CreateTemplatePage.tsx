import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Switch } from '@headlessui/react'
import withAuth from 'components/Auth/withAuth'
import NeutralButton from 'components/NeutralButton'
import PinkButton from 'components/PinkButton'
import { ICreateTemplateRequestDTO } from 'interfaces/Template'
import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import { useState } from 'react'
import 'twin.macro'
import tw from 'twin.macro'
import TemplateInput from '../components/TemplateInput'

const AdminCreateTemplatePage: NextPage = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [createTemplateRequestData, setCreateTemplateRequestData] = useState<ICreateTemplateRequestDTO>({
    templateType: '',
    title: {
      th: '',
      en: '',
    },
    description: {
      th: '',
      en: '',
    },
    isLocked: false,
    fileId: '',
  })
  // console.log(createTemplateRequestData)
  // console.log(uploadedFile)

  const uploadFileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return
    const file = event.target.files[0]
    setUploadedFile(file)
  }

  return (
    <MainLayout header="เพิ่มเทมเพลตเอกสาร">
      <div tw="mt-5 ml-10 flex-1 mb-3 overflow-auto flex flex-col gap-3">
        <div tw="grid grid-cols-[3fr 1fr] gap-2">
          <div tw="flex flex-col gap-2">
            <TemplateInput label="เลขที่จท. เอกสาร" />
            <TemplateInput label="ชื่อเอกสารภาษาไทย" />
            <TemplateInput label="ชื่อเอกสารภาษาอังกฤษ" />
            <TemplateInput label="คำอธิบายภาษาไทย" />
            <TemplateInput label="คำอธิบายภาษาอังกฤษ" />
          </div>
          <div tw="flex justify-end">
            <div tw="flex flex-col justify-end gap-1">
              <div tw="font-h2 text-h2 text-black">เปิดการใช้งาน :</div>
              <div tw="flex items-center justify-end">
                <Switch
                  checked={createTemplateRequestData.isLocked}
                  onChange={(value) => {
                    setCreateTemplateRequestData((prevState) => ({ ...prevState, isLocked: value }))
                  }}
                  css={[
                    tw`relative inline-flex h-[30px] w-[60px] cursor-pointer rounded-full border-2 border-transparent transition-colors 
                duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`,
                    createTemplateRequestData.isLocked ? tw`bg-cu-grey` : tw`bg-cu-pink`,
                  ]}
                >
                  <span
                    css={[
                      tw`pointer-events-none  h-[27px] w-[27px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`,
                      createTemplateRequestData.isLocked ? tw`translate-x-0` : tw`translate-x-[30px]`,
                    ]}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>
        <div tw="flex-1 flex flex-col">
          <div tw="bg-cu-pink rounded-t-xl p-2 text-white text-h3 font-h3 flex items-center gap-2">
            <div tw="text-[24px]">
              <FontAwesomeIcon icon={faFilePdf} />
            </div>
            {uploadedFile?.name ?? 'เลือกไฟล์'}
          </div>
          <div tw="bg-white flex-1 rounded-b-xl p-2 flex justify-center items-center flex-col gap-2 border border-cu-pink">
            <input
              type="file"
              accept=".pdf"
              tw="hidden"
              id="file-input"
              onChange={(event) => {
                uploadFileHandler(event)
              }}
            />
            <label tw="bg-cu-pink py-2 px-4 rounded cursor-pointer text-white text-h3 font-h3" htmlFor="file-input">
              กรุณาเลือกไฟล์ที่จะอัพโหลด
            </label>
            <div tw="font-body text-body text-gray">ขนาดไฟล์จำกัดที่ 5 mb</div>
          </div>
        </div>
        <div tw="flex justify-end gap-2">
          <NeutralButton text="ยกเลิก" />
          <PinkButton text="ตกลง" />
        </div>
      </div>
    </MainLayout>
  )
}

export default withAuth(AdminCreateTemplatePage)
