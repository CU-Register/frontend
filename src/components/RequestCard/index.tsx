import { IRequestOption } from 'interfaces/RequestOption'
import 'twin.macro'

interface IRequestCardProps<ValT> {
  // value: ValT
  // value: number
  dataObject?: string
  requestName: string
  requestNumber?: number
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
const RequestCard = <ValT extends IRequestOption>({
  dataObject,
  requestName,
  requestNumber,
  onClick,
}: IRequestCardProps<ValT>) => {
  return (
    <button
      tw="bg-cu-pinkLd rounded-md flex justify-between p-4 items-center hover:(bg-cu-pink shadow-md) transition-all"
      onClick={onClick}
      data-object={dataObject}
    >
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
