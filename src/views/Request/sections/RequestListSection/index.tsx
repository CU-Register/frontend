import RequestCard from 'components/RequestCard'
import mockRequestOptions from 'mocks/RequestOptions'
import { FC } from 'react'
import 'twin.macro'
const RequestListSection: FC = () => {
  return (
    <div tw="mt-6 flex flex-col gap-5">
      <div tw="text-body font-body text-gray">สามารถคลิ้กที่กล่องคำร้อง เพื่อทำการยื่นคำร้องนั้นๆ</div>
      <div tw="pl-[calc(100px + 1.25rem)]">
        <div tw="grid grid-cols-2 grid-flow-row gap-5  max-h-[400px] overflow-y-scroll">
          {mockRequestOptions.map((requestOption, index) => {
            return (
              <RequestCard
                key={index}
                requestName={requestOption.requestName}
                requestNumber={requestOption.requestNumber}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default RequestListSection
