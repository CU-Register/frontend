import withAuth from 'components/Auth/withAuth'
import VerticalDivider from 'components/Dividers/VerticalDivider'
import NeutralButton from 'components/NeutralButton'
import PinkButton from 'components/PinkButton'
import { PROTECTED_ROUTES } from 'constants/Routes'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'
import useDocument from 'hooks/useDocument'
import { IDocument } from 'interfaces/Document'
import MainLayout from 'layouts/MainLayout'
import _ from 'lodash'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDocumentStore } from 'stores/document.store'
import 'twin.macro'
dayjs.extend(relativeTime)
dayjs.extend(utc)

const DocumentDraftPage: NextPage = () => {
  const router = useRouter()
  const { deleteDraftDocument } = useDocument()
  const { holdingDocuments } = useDocumentStore()
  const [currentDocument, setCurrentDocument] = useState<IDocument | null>(null)

  useEffect(() => {
    const pathTokens = router.asPath.split('/')
    const docId = pathTokens[pathTokens.length - 1]
    const document = _.find(holdingDocuments, { docId })
    if (!document) {
      router.replace(PROTECTED_ROUTES.DRAFT)
      return
    }
    setCurrentDocument(document)
  }, [])

  // const DeleteDocumentDraftDialog = () => {
  //   const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)
  //   const [selectedTemplate, setSelectedTemplate] = useState<Pick<IDocument, 'docId' | 'template'> | null>(null)
  //   const onCloseDialogHandler = () => {
  //     setIsOpenDialog(false)
  //   }
  //   const onRejectDialogHandler = () => {
  //     setIsOpenDialog(false)
  //   }
  //   const deleteDocumentHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
  //     if (!selectedTemplate) return
  //     const pathToken = router.asPath.split('/')
  //     await deleteDraftDocument(selectedTemplate.docId)
  //     alert('delete document successful')
  //     router.replace(PROTECTED_ROUTES.DRAFT)
  //   }
  // }

  return (
    <MainLayout header="แก้ไขโครงร่างคำร้อง">
      <div tw="text-h1 font-h1 text-black">
        {`${currentDocument?.template.title.th} (จท${currentDocument?.template.templateType})`}
      </div>
      <div tw="px-4 py-2 flex flex-col flex-1 mb-4">
        <div tw="flex justify-between text-black text-h2 font-h2">
          <div>กรุณากรอกข้อมูลที่ไม่ถูกสีระบายทับ</div>
          <div>แก้ไขล่าสุด: {`${dayjs(currentDocument?.updatedAt).fromNow()}`}</div>
        </div>
        <div tw="flex-1 flex justify-center items-center overflow-auto">for document draft pdf</div>
        <div tw="flex justify-end gap-4">
          <NeutralButton
            text="ยกเลิกเอกสาร"
            iconSrc="/assets/delete-document-icon.png"
            // onClick={(event) => deleteDocumentHandler(event)}
          />
          <VerticalDivider />
          <NeutralButton text="บันทึกและย้อนกลับ" />
          <PinkButton text="ไปต่อ" />
        </div>
      </div>
    </MainLayout>
  )
}

export default withAuth(DocumentDraftPage)
