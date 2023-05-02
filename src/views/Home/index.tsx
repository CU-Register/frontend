import withAuth from 'components/Auth/withAuth'
import TemplateCard from 'components/TemplateCard'
import { PROTECTED_ROUTES } from 'constants/Routes'
import useTemplate from 'hooks/useTemplate'
import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useTemplateStore } from 'stores/template.store'
import 'twin.macro'
import RequestHistoryTable from './components/RequestHistoryTable'

const HomePage: NextPage = () => {
  const router = useRouter()
  const { fetchTemplates } = useTemplate()
  const { templates } = useTemplateStore()

  useEffect(() => {
    fetchTemplates()
  }, [])

  const otherRequestButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    router.push(PROTECTED_ROUTES.REQUEST)
  }
  const otherStatusButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    router.push(PROTECTED_ROUTES.STATUS)
  }

  return (
    <MainLayout header="ระบบการยื่นคำร้องเพื่อขอเอกสารสำคัญทางการศึกษา">
      <div tw="flex flex-col gap-8">
        <div tw="flex flex-col gap-2">
          <div tw="font-h2 text-h2 text-black">คลิ้กเพื่อยื่นคำร้อง</div>
          {templates && templates.length > 0 && (
            <div tw="grid grid-cols-1 gap-5 grid-flow-row md:(grid-cols-2)">
              {templates.map((template, index) => {
                return (
                  <TemplateCard
                    key={index}
                    title={template.title.th}
                    templateType={template.templateType}
                    // onClick={requestCardHandler}
                    // dataObject={jsonToString(requestOption)}
                  />
                )
              })}
              <TemplateCard title="เขียนคำร้องอื่น ๆ" onClick={otherRequestButtonHandler} />
            </div>
          )}
        </div>
        <div tw="flex flex-col gap-4">
          <div tw="font-h2 text-h2 text-black">ประวัติการยื่นคำร้อง</div>
          <div tw="px-[100px]">
            <RequestHistoryTable />
          </div>
          <div tw="px-[100px]">
            <button tw="font-h2 text-h2 text-cu-pink" onClick={otherStatusButtonHandler}>
              {'ดูประวัติคำร้องอื่น ๆ >>'}
            </button>
          </div>
        </div>
        ​
      </div>
    </MainLayout>
  )
}

export default withAuth(HomePage)
