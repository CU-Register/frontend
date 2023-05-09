import { FC } from 'react'
import 'twin.macro'
interface ITemplateCardProps {
  templateType?: string
  title: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
const TemplateCard: FC<ITemplateCardProps> = ({ title, templateType, onClick }) => {
  return (
    <button
      tw="bg-cu-pinkLd rounded-md flex justify-between p-4 items-center hover:(bg-cu-pink shadow-md) transition-all"
      onClick={onClick}
      value={templateType}
    >
      <div tw="text-h2 font-h2 text-white w-[50%]" className="text-start">
        {title}
      </div>
      <div tw="text-h2 font-h2 text-white">
        {templateType && 'จท'} {templateType && <span tw="text-[55px] font-bold text-white">{templateType}</span>}
        {!templateType && <span tw="text-[55px] font-bold text-white">{'>>'}</span>}
      </div>
    </button>
  )
}

export default TemplateCard
