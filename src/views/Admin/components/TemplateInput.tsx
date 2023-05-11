import TextInput from 'components/TextInput'
import { FC } from 'react'
import 'twin.macro'

interface ITemplateInputProps {
  label: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, key?: string) => void
}
const TemplateInput: FC<ITemplateInputProps> = ({ label, onChange }) => {
  return (
    <div tw="grid grid-cols-[1fr 3fr] items-center gap-3">
      <div tw="font-h3 text-h3 xl:(font-h2 text-h2) text-black flex justify-between items-center gap-2">
        <span>{label}</span>
        <span>:</span>
      </div>
      <TextInput onChange={onChange} />
    </div>
  )
}

export default TemplateInput
