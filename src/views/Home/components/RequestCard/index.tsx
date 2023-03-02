import { FC } from 'react'
import 'twin.macro'

interface IRequestCardProps {
  requestName: string
  requestNumber?: number
}
const RequestCard: FC<IRequestCardProps> = ({ requestName, requestNumber }) => {
  return (
    <button tw="max-h-[90px] bg-cu-pinkLd rounded-md flex justify-between p-8 items-center hover:bg-cu-pink">
      <div tw="text-h2 font-h2 text-white w-[50%]" className="text-start">
        {requestName}
      </div>
      <div tw="text-h2 font-h2 text-white">
        {requestNumber && 'จท'} {requestNumber && <span tw="text-[55px] font-bold text-white">{requestNumber}</span>}
        {!requestNumber && <span tw="text-[55px] font-bold text-white">{'>>'}</span>}
      </div>
    </button>
  )
}

export default RequestCard
