import withAuth from 'components/Auth/withAuth'
import VerticalDivider from 'components/Dividers/VerticalDivider'
import NeutralButton from 'components/NeutralButton'
import PinkButton from 'components/PinkButton'
import { PROTECTED_ROUTES } from 'constants/Routes'
import useDocument from 'hooks/useDocument'
import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import 'twin.macro'

const DocumentDraftPage: NextPage = () => {
  const router = useRouter()
  const { deleteDraftDocument } = useDocument()

  const deleteDocumentHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const pathToken = router.asPath.split('/')
    const documentId = pathToken[pathToken.length - 1]
    await deleteDraftDocument(documentId)
    alert('delete document successful')
    router.replace(PROTECTED_ROUTES.DRAFT)
  }

  return (
    <MainLayout header="แก้ไขโครงร่างคำร้อง">
      <div tw="text-h1 font-h1 text-black">คำร้องขอลาออก (จท32)</div>
      <div tw="px-4 py-2 flex flex-col flex-1 mb-4">
        <div tw="flex justify-between text-black text-h2 font-h2">
          <div>กรุณากรอกข้อมูลที่ไม่ถูกสีระบายทับ</div>
          <div>แก้ไขล่าสุด: 12/4/2565, 12:23 น.</div>
        </div>
        <div tw="flex-1 flex justify-center items-center overflow-auto">for document draft pdf</div>
        <div tw="flex justify-end gap-4">
          <NeutralButton
            text="ยกเลิกเอกสาร"
            iconSrc="/assets/delete-document-icon.png"
            onClick={(event) => deleteDocumentHandler(event)}
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
