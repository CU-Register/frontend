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
import { Instance } from 'pspdfkit'
import { useEffect, useRef, useState } from 'react'
import { useDocumentStore } from 'stores/document.store'
import 'twin.macro'
dayjs.extend(relativeTime)
dayjs.extend(utc)

const DocumentDraftPage: NextPage = () => {
  const router = useRouter()

  const { deleteDraftDocument, fetchDocumentForm, updateDocument } = useDocument()
  const { holdingDocuments } = useDocumentStore()
  const [currentDocument, setCurrentDocument] = useState<IDocument | null>(null)
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState<boolean>(false)
  const [isOpenSaveDialog, setIsOpenSaveDialog] = useState<boolean>(false)
  const [isOpenPreviewDialog, setIsOpenPreviewDialog] = useState<boolean>(false)
  const [documentFormBufferUrl, setDocumentFormBufferUrl] = useState<string | null>(null)
  const [tmpDocumentFormBufferUrl, setTmpDocumentFormBufferUrl] = useState<string | null>(null)
  const [documentPSPDFKitInstance, setDocumentPSPDFKitInstance] = useState<Instance | null>(null)
  const draftDocumentRef = useRef<HTMLDivElement>(null)

  const initDocumentForm = async (docId: string) => {
    try {
      const documentForm = await fetchDocumentForm(docId)
      if (!documentForm) return
      setDocumentFormBufferUrl(URL.createObjectURL(documentForm))
    } catch (error) {
      router.replace(PROTECTED_ROUTES.DRAFT)
    }
  }

  useEffect(() => {
    const docId = router.query.document_id as string
    const document = _.find(holdingDocuments, { docId })
    if (!document) {
      router.replace(PROTECTED_ROUTES.DRAFT)
      return
    }
    Promise.all([setCurrentDocument(document), initDocumentForm(document.docId)])

    return () => {
      if (documentFormBufferUrl) {
        URL.revokeObjectURL(documentFormBufferUrl)
      }
      if (tmpDocumentFormBufferUrl) {
        URL.revokeObjectURL(tmpDocumentFormBufferUrl)
      }
    }
  }, [holdingDocuments])

  useEffect(() => {
    async function renderPDF() {
      const draftDocument = draftDocumentRef.current
      if (!draftDocument) return

      const PSPDFKit: any = await import('pspdfkit')
      const instance = await PSPDFKit.load({
        container: draftDocument,
        document: documentFormBufferUrl,
        locale: 'th',
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
      })
      const selectedToolbarItems = [
        'pan',
        'zoom-out',
        'zoom-in',
        'zoom-mode',
        'spacer',
        'print',
        'search',
        'export-pdf',
        'debug',
      ]
      const toolbarItems = instance.toolbarItems
      instance.setToolbarItems(toolbarItems.filter((item: any) => selectedToolbarItems.includes(item.type)))
      setDocumentPSPDFKitInstance(instance)

      return () => {
        async function unloadPDF() {
          const draftDocument = draftDocumentRef.current
          const PSPDFKit: any = await import('pspdfkit')
          if (!draftDocument) return
          if (PSPDFKit) {
            PSPDFKit.unload(draftDocument)
          }
        }
        unloadPDF()
      }
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

      try {
        await deleteDraftDocument(currentDocument.docId)
        alert('delete document successful')
      } catch (error) {
        alert('delete document unsuccessful')
      } finally {
        setIsOpenDeleteDialog(false)
        router.replace(PROTECTED_ROUTES.DRAFT)
      }
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
      if (!documentPSPDFKitInstance || !currentDocument) return
      const documentBuffer = await documentPSPDFKitInstance.exportPDF()
      const documentBlob = new Blob([documentBuffer], { type: 'application/pdf' })
      try {
        await updateDocument(currentDocument.docId, documentBlob)
        alert('save document successful')
      } catch (error) {
        alert('save document unsuccessful')
      } finally {
        router.push(PROTECTED_ROUTES.DRAFT)
        setIsOpenSaveDialog(false)
      }
    }
    return (
      <PDFPreviewDialog
        isOpen={isOpenSaveDialog}
        title="ยืนยันที่จะบันทึกโครงร่างคำร้อง"
        onClose={onCloseDialogHandler}
        onConfirm={saveDocumentHandler}
        onReject={onRejectDialogHandler}
        pdfUrl={tmpDocumentFormBufferUrl}
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
        pdfUrl={tmpDocumentFormBufferUrl}
        isToForward={true}
      />
    )
  }

  const setupPreviewDraftDocument = async () => {
    if (!documentPSPDFKitInstance) return
    const documentBuffer = await documentPSPDFKitInstance.exportPDF()
    setTmpDocumentFormBufferUrl(URL.createObjectURL(new Blob([documentBuffer], { type: 'application/pdf' })))
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
          <div>แก้ไขล่าสุด: {`${dayjs(`${currentDocument?.updatedAt}Z`).fromNow()}`}</div>
        </div>
        <div tw="flex-1 flex justify-center items-center">
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
              await setupPreviewDraftDocument()
              setIsOpenSaveDialog(true)
            }}
          />
          <PinkButton
            text="ไปต่อ"
            onClick={async () => {
              await setupPreviewDraftDocument()
              setIsOpenPreviewDialog(true)
            }}
          />
        </div>
      </div>
    </MainLayout>
  )
}

export default withAuth(DocumentDraftPage)
