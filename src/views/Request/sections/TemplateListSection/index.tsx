import ActionDialog from 'components/Dialog/ActionDialog'
import TemplateCard from 'components/TemplateCard'
import useTemplate from 'hooks/useTemplate'
import { IRequestOption } from 'interfaces/RequestOption'
import { FC, useEffect, useState } from 'react'
import { useTemplateStore } from 'stores/template.store'
import 'twin.macro'

const TemplateListSection: FC = () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)
  const [selectedRequestOption, setSelectedRequestOption] = useState<IRequestOption | null>(null)
  const { fetchTemplates } = useTemplate()
  const { templates } = useTemplateStore()

  useEffect(() => {
    fetchTemplates()
  }, [])

  const requestCardHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.value)

    // const selectedRequestOption: IRequestOption = stringToJson(event.currentTarget.dataset.object as string)
    // setIsOpenDialog(true)
    // setSelectedRequestOption(selectedRequestOption)
  }

  const onCloseDialog = () => {
    setIsOpenDialog(false)
    setSelectedRequestOption(null)
  }

  return (
    <div tw="my-6 flex flex-col gap-5 flex-1 overflow-auto">
      <div tw="text-body font-body text-gray">สามารถคลิ้กที่กล่องคำร้อง เพื่อทำการยื่นคำร้องนั้นๆ</div>
      <div tw="flex-1 overflow-auto">
        <ActionDialog isOpen={isOpenDialog} onClose={onCloseDialog} selectedValue={selectedRequestOption} />
        {templates && templates.length > 0 && (
          <div tw="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-5 ">
            {templates.map((template, index) => {
              return (
                <TemplateCard
                  key={index}
                  title={template.title.th}
                  templateType={template.templateType}
                  onClick={(event) => requestCardHandler(event)}
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
