import withAuth from 'components/Auth/withAuth'
import ActionDialog from 'components/Dialog/ActionDialog'
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
import { useTemplateStore } from 'stores/template.store'
import 'twin.macro'
import HistoryDocumentTable from './components/HistoryDocumentTable'

const HomePage: NextPage = () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)
  const [selectedTemplate, setSelectedTemplate] = useState<Pick<ITemplate, 'templateType' | 'title'> | null>(null)
  const router = useRouter()
  const { fetchTemplates } = useTemplate()
  const { templates } = useTemplateStore()
  const { fetchHistoryDocuments, createDocument } = useDocument()

  useEffect(() => {
    Promise.all([fetchTemplates(), fetchHistoryDocuments()])
  }, [])

  const otherRequestButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    router.push(PROTECTED_ROUTES.REQUEST)
  }
  const otherStatusButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    router.push(PROTECTED_ROUTES.STATUS)
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
    await createDocument(selectedTemplate.templateType)
    setIsOpenDialog(false)
  }

  return (
    <MainLayout header="ระบบการยื่นคำร้องเพื่อขอเอกสารสำคัญทางการศึกษา">
      <div tw="flex flex-col gap-9">
        <div tw="flex flex-col gap-2">
          <div tw="font-h2 text-h2 text-black">คลิ้กเพื่อยื่นคำร้อง</div>
          <ActionDialog
            isOpen={isOpenDialog}
            onClose={onCloseDialogHandler}
            onReject={onRejectDialogHandler}
            onConfirm={onConfirmDialogHandler}
            title={`${selectedTemplate?.title.th} จท.${selectedTemplate?.templateType}`}
            description="ยืนยันที่จะสร้างโครงร่างคำร้อง"
          />
          {templates && templates.length > 0 && (
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
