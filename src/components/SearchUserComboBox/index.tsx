import { Combobox } from '@headlessui/react'
import useDocument from 'hooks/useDocument'
import { IUser } from 'interfaces/User'
import _ from 'lodash'
import { FC, useState } from 'react'
import { useDocumentStore } from 'stores/document.store'
import 'twin.macro'
import { fullNameFormatterWithoutPlaceholder } from 'utils/formats'

interface ISearchUserComboBoxProps {}
const SearchUserComboBox: FC<ISearchUserComboBoxProps> = ({}) => {
  const { targets, selectedTarget } = useDocumentStore()
  const { fetchTargets, updateSelectedTarget } = useDocument()
  const [loadingTargets, setLoadingTargets] = useState<boolean>(false)

  const inputQueryOnChangeHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoadingTargets(true)
    const query = event.target.value.trim()
    await fetchTargets(query)
    setLoadingTargets(false)
  }
  const debouncedInputQueryOnChangeHandler = _.debounce(inputQueryOnChangeHandler, 300)

  return (
    <Combobox
      value={selectedTarget}
      onChange={(target) => {
        if (!target) return
        updateSelectedTarget(target)
      }}
    >
      <Combobox.Input
        displayValue={(target: IUser) => fullNameFormatterWithoutPlaceholder(target?.firstname.th, target?.lastname.th)}
        onChange={async (event) => {
          debouncedInputQueryOnChangeHandler(event)
        }}
        tw="w-full border border-black rounded-md px-2 py-1 flex"
        placeholder="กรุณาเลือกผู้ที่คุณต้องการส่งเอกสารต่อ"
      />
      <Combobox.Options tw="absolute z-10 border border-cu-pink rounded-md mt-2 bg-white max-h-[120px] overflow-auto">
        {!loadingTargets &&
          targets &&
          targets.length > 0 &&
          targets.map((target, index) => (
            <Combobox.Option key={index} value={target} tw="py-1 p-2 w-[200px] hover:bg-cu-pinkLight cursor-pointer">
              {`${target.firstname.th} ${target.lastname.th}`}
            </Combobox.Option>
          ))}
      </Combobox.Options>
    </Combobox>
  )
}

export default SearchUserComboBox
