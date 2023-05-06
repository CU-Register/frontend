import withAuth from 'components/Auth/withAuth'
import ActionDialog from 'components/Dialogs/ActionDialog'
import PDFPreviewDialog from 'components/Dialogs/PDFPreviewDialog'
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
import * as pdfjsLib from 'pdfjs-dist'
import { useEffect, useRef, useState } from 'react'
import { useDocumentStore } from 'stores/document.store'
import 'twin.macro'

const workerSrc = require('pdfjs-dist/build/pdf.worker.entry')
pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc
dayjs.extend(relativeTime)
dayjs.extend(utc)

const DocumentDraftPage: NextPage = () => {
  const router = useRouter()
  const { deleteDraftDocument, fetchDocumentForm } = useDocument()
  const { holdingDocuments } = useDocumentStore()
  const [currentDocument, setCurrentDocument] = useState<IDocument | null>(null)
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState<boolean>(false)
  const [isOpenSaveDialog, setIsOpenSaveDialog] = useState<boolean>(false)
  const [isOpenPreviewDialog, setIsOpenPreviewDialog] = useState<boolean>(false)
  const [documentFormBuffer, setDocumentFormBuffer] = useState<Blob | null>(null)
  const [documentFormBufferUrl, setDocumentFormBufferUrl] = useState<string | null>(null)
  const draftDocumentRef = useRef<HTMLDivElement>(null)

  const initDocumentForm = async (docId: string) => {
    const documentForm = await fetchDocumentForm(docId)
    if (!documentForm) return
    setDocumentFormBuffer(documentForm)
    setDocumentFormBufferUrl(URL.createObjectURL(documentForm))
  }

  useEffect(() => {
    const pathTokens = router.asPath.split('/')
    const docId = pathTokens[pathTokens.length - 1]
    const document = _.find(holdingDocuments, { docId })
    if (!document) {
      router.replace(PROTECTED_ROUTES.DRAFT)
      return
    }
    Promise.all([setCurrentDocument(document), initDocumentForm(document.docId)])
  }, [])

  useEffect(() => {
    async function renderPDF() {
      const draftDocument = draftDocumentRef.current
      if (!draftDocument) return

      const PSPDFKit: any = await import('pspdfkit')
      if (PSPDFKit) {
        PSPDFKit.unload(draftDocument)
      }
      await PSPDFKit.load({
        container: draftDocument,
        document: documentFormBufferUrl,
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
      })
    }

    renderPDF()
  }, [documentFormBufferUrl, draftDocumentRef])

  const DeleteDocumentDraftDialog = () => {
    const onCloseDialogHandler = () => {
      setIsOpenDeleteDialog(false)
    }
    const onRejectDialogHandler = () => {
      setIsOpenDeleteDialog(false)
    }
    const deleteDocumentHandler = async () => {
      if (!currentDocument) return
      await deleteDraftDocument(currentDocument.docId)
      alert('delete document successful')
      setIsOpenDeleteDialog(false)
      router.replace(PROTECTED_ROUTES.DRAFT)
    }
    return (
      <ActionDialog
        isOpen={isOpenDeleteDialog}
        onClose={onCloseDialogHandler}
        onConfirm={deleteDocumentHandler}
        onReject={onRejectDialogHandler}
        title={`${currentDocument?.template.title.th} จท.${currentDocument?.template.templateType}`}
        description="ยืนยันที่จะลบโครงร่างคำร้อง"
      />
    )
  }

  const SaveDocumentDraftDialog = () => {
    const onCloseDialogHandler = () => {
      setIsOpenSaveDialog(false)
    }
    const onRejectDialogHandler = () => {
      setIsOpenSaveDialog(false)
    }
    const saveDocumentHandler = async () => {
      setIsOpenSaveDialog(false)
    }
    return (
      <PDFPreviewDialog
        isOpen={isOpenSaveDialog}
        title="ยืนยันที่จะบันทึกโครงร่างคำร้อง"
        onClose={onCloseDialogHandler}
        onConfirm={saveDocumentHandler}
        onReject={onRejectDialogHandler}
        pdfUrl={documentFormBufferUrl}
      />
    )
  }

  const PreviewDocumentDraftDialog = () => {
    const onCloseDialogHandler = () => {
      setIsOpenPreviewDialog(false)
    }
    const onRejectDialogHandler = () => {
      setIsOpenPreviewDialog(false)
    }
    const forwardDocumentHandler = async () => {
      setIsOpenPreviewDialog(false)
    }
    return (
      <PDFPreviewDialog
        isOpen={isOpenPreviewDialog}
        title={'ยืนยันที่จะส่งคำร้อง'}
        onClose={onCloseDialogHandler}
        onConfirm={forwardDocumentHandler}
        onReject={onRejectDialogHandler}
        pdfUrl={documentFormBufferUrl}
        isToForward={true}
      />
    )
  }

  if (!currentDocument) {
    return null
  }

  return (
    <MainLayout header="แก้ไขโครงร่างคำร้อง">
      <DeleteDocumentDraftDialog />
      <SaveDocumentDraftDialog />
      <PreviewDocumentDraftDialog />
      <div tw="text-h1 font-h1 text-black">
        {`${currentDocument?.template.title.th} (จท${currentDocument?.template.templateType})`}
      </div>
      <div tw="px-4 py-2 flex flex-col flex-1 mb-4 gap-4">
        <div tw="flex justify-between text-black text-h2 font-h2">
          <div>กรุณากรอกข้อมูลที่ไม่ถูกสีระบายทับ</div>
          <div>แก้ไขล่าสุด: {`${dayjs(currentDocument?.updatedAt).fromNow()}`}</div>
        </div>
        <div tw="flex-1 flex justify-center items-center">
          {/* {documentFormBufferUrl && (
            <object
              ref={documentRef}
              data={`${documentFormBufferUrl}`}
              type="application/pdf"
              tw="w-full h-full overflow-auto"
            />
          )} */}
          {documentFormBufferUrl && <div ref={draftDocumentRef} tw="w-full h-full" />}
        </div>
        <div tw="flex justify-end gap-4">
          <NeutralButton
            text="ยกเลิกเอกสาร"
            iconSrc="/assets/delete-document-icon.png"
            onClick={() => setIsOpenDeleteDialog(true)}
          />
          <VerticalDivider />
          <NeutralButton
            text="บันทึกและย้อนกลับ"
            onClick={async () => {
              setIsOpenSaveDialog(true)
            }}
          />
          <PinkButton
            text="ไปต่อ"
            onClick={() => {
              setIsOpenPreviewDialog(true)
            }}
          />
        </div>
      </div>
    </MainLayout>
  )
}

export default withAuth(DocumentDraftPage)
