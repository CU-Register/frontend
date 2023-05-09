import withAuth from 'components/Auth/withAuth'
import { PROTECTED_ROUTES } from 'constants/Routes'
import dayjs from 'dayjs'
import useDocument from 'hooks/useDocument'
import { IDocumentInfo, IDocumentInfoTimeline } from 'interfaces/Document'
import MainLayout from 'layouts/MainLayout'
import _ from 'lodash'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useProfileStore } from 'stores/profile.store'
import 'twin.macro'
import { dateFormatter } from 'utils/formats'
import StatusStepper from 'views/Status/components/StatusStepper'
const CheckStatusPage: NextPage = () => {
  const { userProfile } = useProfileStore()
  const { fetchDocumentInfo } = useDocument()
  const [documentInfo, setDocumentInfo] = useState<IDocumentInfo | null>(null)
  const [userTimeline, setUserTimeline] = useState<IDocumentInfoTimeline[]>([])
  const router = useRouter()

  useEffect(() => {
    const initDocumentInfo = async () => {
      if (!userProfile) return
      const documentId = router.query.document_id as string
      try {
        const documentInfo = await fetchDocumentInfo(documentId)
        if (!documentInfo) router.replace(PROTECTED_ROUTES.STATUS)
        setDocumentInfo(documentInfo)
        setUserTimeline(_.filter(documentInfo?.timeline, (tl) => tl.actor.actor_id === userProfile?.uid))
      } catch (error) {
        router.replace(PROTECTED_ROUTES.STATUS)
      }
    }
    initDocumentInfo()
  }, [userProfile])

  return (
    <MainLayout header="ตรวจสอบสถานะการยื่นคำร้อง">
      <div tw="flex w-full overflow-auto gap-5 mb-2">
        <div tw="flex flex-col max-w-[70%]">
          {documentInfo && (
            <div tw="font-h1 text-h1 text-black">{`${documentInfo?.template.title.th} (จท ${documentInfo?.template.templateType})`}</div>
          )}
          <div tw="flex flex-col gap-3 pl-5 text-h2 font-h2 text-black flex-1 overflow-auto mt-3">
            <div tw="grid grid-cols-2">
              <div>วันที่ยื่นคำร้อง</div>
              {documentInfo && <div>{dateFormatter(documentInfo.createdAt)}</div>}
            </div>
            <div tw="grid grid-cols-2">
              <div>เวลาที่ืยื่นคำร้อง</div>
              {documentInfo && <div>{`${dayjs(`${documentInfo?.createdAt}Z`).format('HH:mm')}`}</div>}
            </div>
            <div tw="grid grid-cols-2 flex-1 overflow-auto">
              <div>การดำเนินการคำร้องของท่าน</div>
              <div tw="text-cu-pink flex flex-col gap-1 overflow-auto">
                {userTimeline.map((tl, index) => {
                  return <div key={index}>{`(${tl.step}) ${tl.message.th}`}</div>
                })}
              </div>
            </div>
            <div tw="grid grid-cols-2">
              <div>สถานะเอกสารปัจจุบัน</div>
              <div>{documentInfo?.status}</div>
            </div>
          </div>
        </div>
        <div tw="flex flex-col max-w-[30%] overflow-auto">
          {documentInfo && (
            <StatusStepper
              timeline={documentInfo?.timeline}
              totalSteps={documentInfo.step.overall + 1}
              currentSteps={documentInfo.step.current}
            />
          )}
        </div>
      </div>
    </MainLayout>
  )
}

export default withAuth(CheckStatusPage)
