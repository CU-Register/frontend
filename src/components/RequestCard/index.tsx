import { FC } from 'react'
import 'twin.macro'

interface IRequestCardProps {
  requestName: string
  requestNumber?: number
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
const RequestCard: FC<IRequestCardProps> = ({ requestName, requestNumber, onClick }) => {
  return (
    <button tw="bg-cu-pinkLd rounded-md flex justify-between p-4 items-center hover:bg-cu-pink" onClick={onClick}>
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
