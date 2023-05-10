import TextInput from 'components/TextInput'
import { FC } from 'react'
import 'twin.macro'

interface ITemplateInputProps {
  label: string
}
const TemplateInput: FC<ITemplateInputProps> = ({ label }) => {
  return (
    <div tw="grid grid-cols-[1fr 4fr] items-center gap-3">
      <div tw="font-h2 text-h2 text-black flex justify-between items-center gap-2">
        <span>{label}</span>
        <span>:</span>
      </div>
      <TextInput />
    </div>
  )
}

export default TemplateInput
