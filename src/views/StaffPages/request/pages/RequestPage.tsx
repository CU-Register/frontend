import withAuth from 'components/Auth/withAuth'
import PDFPreviewDialog from 'components/Dialogs/PDFPreviewDialog'
import NeutralButton from 'components/NeutralButton'
import PinkButton from 'components/PinkButton'
import SearchUserComboBox from 'components/SearchUserComboBox'
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
import { useDocumentStore } from 'stores/document.store'
import 'twin.macro'
import { fullNameFormatter } from 'utils/formats'
dayjs.extend(relativeTime)
dayjs.extend(utc)

const DocumentDraftPage: NextPage = () => {
  const router = useRouter()

  const {
    deleteDraftDocument,
    fetchDocumentForm,
    updateDocument,
    fetchDocumentInfo,
    fetchPreviewDocument,
    forwardDocument,
  } = useDocument()
  const { selectedTarget } = useDocumentStore()
  const [currentDocumentInfo, setCurrentDocumentInfo] = useState<IDocumentInfo | null>(null)
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState<boolean>(false)
  const [isOpenSaveDialog, setIsOpenSaveDialog] = useState<boolean>(false)
  const [isOpenPreviewDialog, setIsOpenPreviewDialog] = useState<boolean>(false)
  const [previewDocumentFormBufferUrl, setPreviewDocumentFormBufferUrl] = useState<string | null>(null)
  const [documentPSPDFKitInstance, setDocumentPSPDFKitInstance] = useState<Instance | null>(null)
  const draftDocumentRef = useRef<HTMLDivElement>(null)
  console.log(currentDocumentInfo)

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
    let PSPDFKit: any
    const renderPDF = async () => {
      const documentId = router.query.document_id as string
      const draftDocument = draftDocumentRef.current
      if (!draftDocument) return
      try {
        const documentForm = await fetchDocumentForm(documentId)
        if (!documentForm) router.replace(PROTECTED_ROUTES.DRAFT)
        const documentFormBufferUrl = URL.createObjectURL(documentForm)
        PSPDFKit = await import('pspdfkit')
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

    return () => PSPDFKit && PSPDFKit.unload(draftDocumentRef)
  }, [draftDocumentRef.current])

  // const DeleteDocumentDraftDialog = () => {
  //   const onCloseDialogHandler = () => {
  //     setIsOpenDeleteDialog(false)
  //   }
  //   const onRejectDialogHandler = () => {
  //     setIsOpenDeleteDialog(false)
  //   }
  //   const deleteDocumentHandler = async () => {
  //     if (!currentDocumentInfo) return

  //     try {
  //       await deleteDraftDocument(currentDocumentInfo.docId)
  //       alert('delete document successful')
  //     } catch (error) {
  //       alert('delete document unsuccessful')
  //     } finally {
  //       setIsOpenDeleteDialog(false)
  //       router.replace(PROTECTED_ROUTES.STAFF_REQUEST)
  //     }
  //   }
  //   return (
  //     <ActionDialog
  //       isOpen={isOpenDeleteDialog}
  //       onClose={onCloseDialogHandler}
  //       onConfirm={deleteDocumentHandler}
  //       onReject={onRejectDialogHandler}
  //       title={`${currentDocumentInfo?.template.title.th} จท.${currentDocumentInfo?.template.templateType}`}
  //       description="ยืนยันที่จะลบโครงร่างคำร้อง"
  //     />
  //   )
  // }

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
        router.push(PROTECTED_ROUTES.STAFF_REQUEST)
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
      if (
        !documentPSPDFKitInstance ||
        !currentDocumentInfo ||
        (!selectedTarget && currentDocumentInfo?.step.current != currentDocumentInfo?.step.overall)
      )
        return
      const documentBuffer = await documentPSPDFKitInstance.exportPDF()
      const documentBlob = new Blob([documentBuffer], { type: 'application/pdf' })
      console.log('log')

      try {
        await forwardDocument(currentDocumentInfo.docId, selectedTarget?.uid || '', documentBlob)
        alert('submit document successful')
      } catch (error) {
        alert('submit document unsuccessful')
      } finally {
        router.replace(PROTECTED_ROUTES.STAFF_REQUEST)
        setIsOpenPreviewDialog(false)
      }
    }
    return (
      <PDFPreviewDialog
        isOpen={isOpenPreviewDialog}
        title={
          currentDocumentInfo?.step.current == currentDocumentInfo?.step.overall
            ? 'ยืนยันการอนุมัติเอกสาร'
            : 'ยืนยันที่จะส่งคำร้อง'
        }
        onClose={onCloseDialogHandler}
        onConfirm={forwardDocumentHandler}
        onReject={onRejectDialogHandler}
        pdfUrl={previewDocumentFormBufferUrl}
        isToForward={currentDocumentInfo?.step.current != currentDocumentInfo?.step.overall}
        isToApprove={currentDocumentInfo?.step.current == currentDocumentInfo?.step.overall}
        selectedTargetFullName={fullNameFormatter(selectedTarget?.firstname.th, selectedTarget?.lastname.th)}
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
      {/* <DeleteDocumentDraftDialog /> */}
      <SaveDocumentDraftDialog />
      <PreviewDocumentDraftDialog />
      <div tw="flex justify-between items-center">
        <div tw="text-h1 font-h1 text-black">
          {`${currentDocumentInfo?.template.title.th} (จท${currentDocumentInfo?.template.templateType})`}
        </div>
        <div>
          <div tw="flex justify-between text-black text-h2 font-h2">
            ผู้ส่งคำร้อง: {currentDocumentInfo?.creator.firstname.th} {currentDocumentInfo?.creator.lastname.th}
          </div>
        </div>
      </div>
      <div tw="px-4 py-2 flex flex-col flex-1 mb-4 gap-4">
        <div tw="flex justify-between text-black text-h2 font-h2">
          <div>กรุณากรอกข้อมูลในพื้นที่ที่ถูกล้อมรอบด้วยสีน้ำเงิน</div>
          <div>แก้ไขล่าสุด: {`${dayjs(`${currentDocumentInfo?.updatedAt}Z`).fromNow()}`}</div>
        </div>
        <div tw="flex-1 flex justify-center items-center">
          <div ref={draftDocumentRef} tw="w-full h-full" />
        </div>
        <div tw="flex justify-between gap-4">
          <div tw="flex">
            {/* <NeutralButton
              text="ยกเลิกเอกสาร"
              iconSrc="/assets/delete-document-icon.png"
              onClick={() => setIsOpenDeleteDialog(true)}
            />
            <VerticalDivider /> */}
            <NeutralButton
              text="บันทึกและย้อนกลับ"
              onClick={async () => {
                await setupPreviewDraftDocument()
                setIsOpenSaveDialog(true)
              }}
            />
          </div>
          <div tw="flex gap-5 items-center">
            {currentDocumentInfo.step.current != currentDocumentInfo.step.overall && (
              <>
                <div tw="w-[280px]">
                  <SearchUserComboBox />
                </div>
                <PinkButton
                  text="ไปต่อ"
                  onClick={async () => {
                    await setupPreviewDraftDocument()
                    setIsOpenPreviewDialog(true)
                  }}
                  disabled={!selectedTarget}
                />
              </>
            )}
            {currentDocumentInfo.step.current == currentDocumentInfo.step.overall && (
              <PinkButton
                text="ไปต่อ"
                onClick={async () => {
                  await setupPreviewDraftDocument()
                  setIsOpenPreviewDialog(true)
                }}
              />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default withAuth(DocumentDraftPage)
