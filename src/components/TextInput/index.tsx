import { FC } from 'react'
import 'twin.macro'

interface ITextInput {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, key?: string) => void
}
const TextInput: FC<ITextInput> = ({ onChange }) => {
  return (
    <input
      onChange={onChange}
      tw="py-1 px-2 focus:border-cu-pink focus:outline-none focus:text-cu-pink border border-black rounded"
    />
  )
}

export default TextInput
