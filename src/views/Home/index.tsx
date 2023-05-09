import withAuth from 'components/Auth/withAuth'
import ActionDialog from 'components/Dialogs/ActionDialog'
import TemplateCard from 'components/TemplateCard'
import { PROTECTED_ROUTES } from 'constants/Routes'
import useDocument from 'hooks/useDocument'
import useTemplate from 'hooks/useTemplate'
import { ITemplate } from 'interfaces/Template'
import MainLayout from 'layouts/MainLayout'
import _ from 'lodash'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDocumentStore } from 'stores/document.store'
import { useProfileStore } from 'stores/profile.store'
import { useTemplateStore } from 'stores/template.store'
import 'twin.macro'
import HistoryDocumentTable from './components/HistoryDocumentTable'

const HomePage: NextPage = () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)
  const [selectedTemplate, setSelectedTemplate] = useState<Pick<ITemplate, 'templateType' | 'title'> | null>(null)
  const router = useRouter()
  const { fetchTemplates } = useTemplate()
  const { templates } = useTemplateStore()
  const { fetchHistoryDocuments, createDocument, fetchDocumentSummary, fetchHoldingDocuments } = useDocument()
  const { summaryDocuments } = useDocumentStore()
  const { userProfile } = useProfileStore()
  useEffect(() => {
    Promise.all([fetchTemplates(), fetchHistoryDocuments(), fetchHoldingDocuments(), fetchDocumentSummary()])
  }, [])

  const otherRequestButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    router.push(PROTECTED_ROUTES.REQUEST)
  }
  const otherStatusButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    router.push(PROTECTED_ROUTES.STATUS)
  }
  const otherHoldingButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    router.push(PROTECTED_ROUTES.STAFF_REQUEST)
  }
  const templateCardHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selectedTitle = _.find(templates, { templateType: event.currentTarget.value })?.title
    if (!selectedTitle) return
    setSelectedTemplate({
      templateType: event.currentTarget.value,
      title: selectedTitle,
    })

    setIsOpenDialog(true)
  }

  const onCloseDialogHandler = () => {
    setIsOpenDialog(false)
  }

  const onRejectDialogHandler = () => {
    setIsOpenDialog(false)
  }

  const onConfirmDialogHandler = async () => {
    if (!selectedTemplate) return
    try {
      const newDocumentId = (await createDocument(selectedTemplate.templateType)).docId
      alert('create document successful')
      router.push(`${PROTECTED_ROUTES.DRAFT}/${newDocumentId}`)
    } catch (error) {
      alert('create document failed')
    } finally {
      setIsOpenDialog(false)
    }
  }

  const isStaff = userProfile?.role === 'faculty'

  if (isStaff) {
    return (
      <MainLayout header="ระบบการยื่นคำร้องเพื่อขอเอกสารสำคัญทางการศึกษา">
        <div tw="flex flex-col gap-9">
          <div tw="flex flex-col gap-2">
            <div tw="flex justify-between items-end  text-h1 font-h1 ">
              <div tw="flex flex-col text-cu-pink">
                <div>คำร้องที่รอดำเนินการ</div>
                <span tw="text-[70px]">{summaryDocuments?.incoming}</span>
              </div>
              <div tw="flex flex-col items-center">
                <div>อนุมัติแล้ว</div>
                <div tw="text-[70px] ">{summaryDocuments?.approved}</div>
              </div>
              <div tw="flex flex-col items-center">
                <div>ยกเลิกแล้ว</div>
                <div tw="text-[70px] ">{summaryDocuments?.declined}</div>
              </div>
              <div tw="flex items-end justify-between gap-6">
                <div tw="flex flex-col justify-between h-full items-center">
                  <div>รวมทั้งหมด</div>
                  <div tw="text-[70px]">{summaryDocuments?.overall}</div>
                </div>
                <span tw="ml-4 text-h1 font-h1 mb-4">คำร้อง</span>
              </div>
            </div>
          </div>
          <div tw="flex flex-col gap-3">
            <div tw="font-h1 text-h2">คำร้องที่รอดำเนินการ</div>
            <HistoryDocumentTable />
            <div>
              <button tw="font-h2 text-h2 text-cu-pink" onClick={otherHoldingButtonHandler}>
                {'ดูคำร้องอื่น ๆ >>'}
              </button>
            </div>
          </div>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout header="ระบบการยื่นคำร้องเพื่อขอเอกสารสำคัญทางการศึกษา">
      <div tw="flex flex-col gap-9">
        <div tw="flex flex-col gap-2">
          {templates && templates.length > 0 && (
            <>
              <div tw="font-h2 text-h2 text-black">คลิ้กเพื่อยื่นคำร้อง</div>
              <ActionDialog
                isOpen={isOpenDialog}
                onClose={onCloseDialogHandler}
                onReject={onRejectDialogHandler}
                onConfirm={onConfirmDialogHandler}
                title={`${selectedTemplate?.title.th} จท.${selectedTemplate?.templateType}`}
                description="ยืนยันที่จะสร้างโครงร่างคำร้อง"
              />
              <div tw="grid grid-cols-1 gap-5 grid-flow-row md:(grid-cols-2)">
                {templates.map((template, index) => {
                  return (
                    <TemplateCard
                      key={index}
                      title={template.title.th}
                      templateType={template.templateType}
                      onClick={(event) => templateCardHandler(event)}
                    />
                  )
                })}
                <TemplateCard title="เขียนคำร้องอื่น ๆ" onClick={otherRequestButtonHandler} />
              </div>
            </>
          )}
        </div>
        <div tw="flex flex-col gap-3">
          <div tw="font-h2 text-h2 text-black">ประวัติการยื่นคำร้อง</div>
          <HistoryDocumentTable />
          <div>
            <button tw="font-h2 text-h2 text-cu-pink" onClick={otherStatusButtonHandler}>
              {'ดูประวัติคำร้องอื่น ๆ >>'}
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default withAuth(HomePage)
