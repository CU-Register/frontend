import ActionDialog from 'components/Dialog/ActionDialog'
import TemplateCard from 'components/TemplateCard'
import useDocument from 'hooks/useDocument'
import { ITemplate } from 'interfaces/Template'
import _ from 'lodash'
import { FC, useState } from 'react'
import { useTemplateStore } from 'stores/template.store'
import 'twin.macro'

const TemplateListSection: FC = () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)
  const [selectedTemplate, setSelectedTemplate] = useState<Pick<ITemplate, 'templateType' | 'title'> | null>(null)
  const { templates } = useTemplateStore()
  const { createDocument } = useDocument()

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
    alert('create document successful')
    setIsOpenDialog(false)
  }

  return (
    <div tw="my-6 flex flex-col gap-5 flex-1 overflow-auto">
      <div tw="text-body font-body text-gray">สามารถคลิ้กที่กล่องคำร้อง เพื่อทำการยื่นคำร้องนั้นๆ</div>
      <div tw="flex-1 overflow-auto">
        <ActionDialog
          isOpen={isOpenDialog}
          onClose={onCloseDialogHandler}
          onReject={onRejectDialogHandler}
          onConfirm={onConfirmDialogHandler}
          title={`${selectedTemplate?.title.th} จท.${selectedTemplate?.templateType}`}
          description="ยืนยันที่จะสร้างโครงร่างคำร้อง"
        />
        {templates && templates.length > 0 && (
          <div tw="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-5 ">
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
          </div>
        )}
      </div>
    </div>
  )
}

export default TemplateListSection
