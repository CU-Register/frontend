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
import { IDocumentInfo } from 'interfaces/Document'
import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Instance } from 'pspdfkit'
import { useEffect, useRef, useState } from 'react'
import 'twin.macro'
dayjs.extend(relativeTime)
dayjs.extend(utc)

const DocumentDraftPage: NextPage = () => {
  const router = useRouter()

  const { deleteDraftDocument, fetchDocumentForm, updateDocument, fetchDocumentInfo, fetchPreviewDocument } =
    useDocument()
  const [currentDocumentInfo, setCurrentDocumentInfo] = useState<IDocumentInfo | null>(null)
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState<boolean>(false)
  const [isOpenSaveDialog, setIsOpenSaveDialog] = useState<boolean>(false)
  const [isOpenPreviewDialog, setIsOpenPreviewDialog] = useState<boolean>(false)
  const [previewDocumentFormBufferUrl, setPreviewDocumentFormBufferUrl] = useState<string | null>(null)
  const [documentPSPDFKitInstance, setDocumentPSPDFKitInstance] = useState<Instance | null>(null)
  const draftDocumentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const documentId = router.query.document_id as string
    const initDocumentInfo = async (documentId: string) => {
      try {
        const documentInfo = await fetchDocumentInfo(documentId)
        if (!documentInfo) router.replace(PROTECTED_ROUTES.DRAFT)
        setCurrentDocumentInfo(documentInfo)
      } catch (error) {
        router.replace(PROTECTED_ROUTES.DRAFT)
      }
    }
    Promise.all([initDocumentInfo(documentId)])
  }, [])

  useEffect(() => {
    const renderPDF = async () => {
      const documentId = router.query.document_id as string
      const draftDocument = draftDocumentRef.current
      if (!draftDocument) return
      try {
        const documentForm = await fetchDocumentForm(documentId)
        if (!documentForm) router.replace(PROTECTED_ROUTES.DRAFT)
        const documentFormBufferUrl = URL.createObjectURL(documentForm)
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
        URL.revokeObjectURL(documentFormBufferUrl)
      } catch (error) {
        router.replace(PROTECTED_ROUTES.DRAFT)
      }
    }
    renderPDF()

    return () => {
      const unloadPDF = async () => {
        const draftDocument = draftDocumentRef.current
        if (!draftDocument) return
        const PSPDFKit: any = await import('pspdfkit')
        if (PSPDFKit) {
          PSPDFKit.unload(draftDocument)
        }
      }
      unloadPDF()
      if (previewDocumentFormBufferUrl) {
        URL.revokeObjectURL(previewDocumentFormBufferUrl)
      }
    }
  }, [draftDocumentRef.current])

  const DeleteDocumentDraftDialog = () => {
    const onCloseDialogHandler = () => {
      setIsOpenDeleteDialog(false)
    }
    const onRejectDialogHandler = () => {
      setIsOpenDeleteDialog(false)
    }
    const deleteDocumentHandler = async () => {
      if (!currentDocumentInfo) return

      try {
        await deleteDraftDocument(currentDocumentInfo.docId)
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
        title={`${currentDocumentInfo?.template.title.th} จท.${currentDocumentInfo?.template.templateType}`}
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
      if (!documentPSPDFKitInstance || !currentDocumentInfo) return
      const documentBuffer = await documentPSPDFKitInstance.exportPDF()
      const documentBlob = new Blob([documentBuffer], { type: 'application/pdf' })
      try {
        await updateDocument(currentDocumentInfo.docId, documentBlob)
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
        pdfUrl={previewDocumentFormBufferUrl}
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
        pdfUrl={previewDocumentFormBufferUrl}
        isToForward={true}
      />
    )
  }

  const setupPreviewDraftDocument = async () => {
    if (!documentPSPDFKitInstance || !currentDocumentInfo) return
    const documentArrayBuffer = await documentPSPDFKitInstance.exportPDF()
    const documentBlob = new Blob([documentArrayBuffer], { type: 'application/pdf' })
    const previewDocument = await fetchPreviewDocument(currentDocumentInfo?.docId, documentBlob)
    setPreviewDocumentFormBufferUrl(URL.createObjectURL(previewDocument))
  }

  if (!currentDocumentInfo) {
    return null
  }

  return (
    <MainLayout header="แก้ไขโครงร่างคำร้อง">
      <DeleteDocumentDraftDialog />
      <SaveDocumentDraftDialog />
      <PreviewDocumentDraftDialog />
      <div tw="text-h1 font-h1 text-black">
        {`${currentDocumentInfo?.template.title.th} (จท${currentDocumentInfo?.template.templateType})`}
      </div>
      <div tw="px-4 py-2 flex flex-col flex-1 mb-4 gap-4">
        <div tw="flex justify-between text-black text-h2 font-h2">
          <div>กรุณากรอกข้อมูลที่ไม่ถูกสีระบายทับ</div>
          <div>แก้ไขล่าสุด: {`${dayjs(`${currentDocumentInfo?.updatedAt}Z`).fromNow()}`}</div>
        </div>
        <div tw="flex-1 flex justify-center items-center">
          <div ref={draftDocumentRef} tw="w-full h-full" />
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
