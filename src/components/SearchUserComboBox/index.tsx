import { Combobox } from '@headlessui/react'
import useDocument from 'hooks/useDocument'
import { IUser } from 'interfaces/User'
import _ from 'lodash'
import { FC, useState } from 'react'
import { useDocumentStore } from 'stores/document.store'
import 'twin.macro'

interface ISearchUserComboBoxProps {}
const SearchUserComboBox: FC<ISearchUserComboBoxProps> = ({}) => {
  const { targets, selectedTarget } = useDocumentStore()
  const { fetchTargets, updateSelectedTarget } = useDocument()
  const [loadingTargets, setLoadingTargets] = useState<boolean>(false)

  const inputQueryOnChangeHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoadingTargets(true)
    const query = event.target.value.trim()
    fetchTargets(query)
    setLoadingTargets(false)
  }
  const debouncedInputQueryOnChangeHandler = _.debounce(inputQueryOnChangeHandler, 300)
  console.log(selectedTarget)

  return (
    <Combobox
      value={selectedTarget}
      onChange={(target) => {
        if (!target) return
        updateSelectedTarget(target)
      }}
    >
      <Combobox.Input
        displayValue={(target: IUser) => target.firstname.th}
        onChange={async (event) => {
          debouncedInputQueryOnChangeHandler(event)
        }}
        tw="w-full border border-black rounded-md py-1 px-2 flex"
        placeholder="รายชื่อบุคคลากรทางการศึกษา"
      />
      <Combobox.Options>
        {/* <div css={[targets && targets.length > 0 && tw`p-4 bg-white rounded-lg`]}> */}
        {!loadingTargets &&
          targets &&
          targets.length > 0 &&
          targets.map((target, index) => (
            <Combobox.Option key={index} value={target}>
              {target.firstname.th}
            </Combobox.Option>
          ))}
        {/* </div> */}
      </Combobox.Options>
    </Combobox>
  )
}

export default SearchUserComboBox
