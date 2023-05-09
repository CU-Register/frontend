import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Listbox } from '@headlessui/react'
import { IUserOption, IUserProfile } from 'interfaces/Profile'
import _ from 'lodash'
import { FC } from 'react'
import { useProfileStore } from 'stores/profile.store'
import 'twin.macro'
import tw from 'twin.macro'
interface IProfileDetailsProps {
  label: string
  optionKey?: 'salutation' | 'faculty' | 'department' | 'academicSystem' | 'studentLevel'
  inputKey?: 'telephone' | 'email' | 'address'
  value: string
  editModeDefaultValue?: string
  editOptions?: IUserOption[]
  isEditMode: boolean
  isEditAsOption?: boolean
  isEditAsInput?: boolean
  isEditAsTextArea?: boolean
}
const ProfileDetails: FC<IProfileDetailsProps> = ({
  label,
  optionKey,
  inputKey,
  value,
  editModeDefaultValue,
  editOptions,
  isEditMode,
  isEditAsOption,
  isEditAsInput,
  isEditAsTextArea,
}) => {
  const { tmpUserProfile, setTmpUserProfile } = useProfileStore()

  const inputTextOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (inputKey) {
      const newTmpUserProfile = { ...tmpUserProfile, [inputKey]: event.target.value } as IUserProfile
      setTmpUserProfile(newTmpUserProfile)
    }
  }
  const textAreaOnChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (inputKey) {
      const newTmpUserProfile = { ...tmpUserProfile, [inputKey]: event.target.value } as IUserProfile
      setTmpUserProfile(newTmpUserProfile)
    }
  }
  const optionOnChangeHandler = (newOption: IUserOption) => {
    if (optionKey) {
      const newTmpUserProfile = { ...tmpUserProfile, [optionKey]: newOption } as IUserProfile
      setTmpUserProfile(newTmpUserProfile)
    }
  }
  const debouncedInputOnChangeHandler = _.debounce(inputTextOnChangeHandler, 300)
  const debouncedTextAreaOnChangeHandler = _.debounce(textAreaOnChangeHandler, 300)

  return (
    <div tw="grid grid-cols-[1fr 2fr] gap-4 text-h2 font-h2 text-black">
      <div tw="text-gray">{label}</div>
      {!isEditMode && (
        <div css={[tw`flex break-all`]} className="text-start">
          {value}
        </div>
      )}

      {isEditMode && isEditAsOption && tmpUserProfile && optionKey && (
        <div tw="relative w-full">
          <Listbox value={tmpUserProfile[optionKey]} onChange={(option) => optionOnChangeHandler(option)}>
            {({ open }) => (
              <>
                <Listbox.Button
                  tw="flex justify-between py-1 px-2 rounded-md items-center gap-2 w-full border border-black"
                  css={[open && tw`border-cu-pink outline-none text-cu-pink`]}
                >
                  <div tw="text-left break-all">{tmpUserProfile[optionKey].name.th}</div>
                  <div tw="text-cu-pink w-3">
                    {open && <FontAwesomeIcon icon={faCaretUp} />}
                    {!open && <FontAwesomeIcon icon={faCaretDown} />}
                  </div>
                </Listbox.Button>
                {editOptions && editOptions.length > 0 && (
                  <Listbox.Options tw="absolute w-full z-10 border border-cu-pink rounded-md mt-2 bg-white max-h-[250px] overflow-auto">
                    {editOptions.map((option, index) => (
                      <Listbox.Option key={index} value={option} tw="py-1 px-2 hover:bg-cu-pinkLight">
                        {option.name.th}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                )}
              </>
            )}
          </Listbox>
        </div>
      )}

      {isEditMode && isEditAsInput && (
        <input
          tw="border border-black py-1 px-2 rounded-md focus:border-cu-pink focus:outline-none focus:text-cu-pink"
          className="focus:border-pink-500"
          onChange={(event) => debouncedInputOnChangeHandler(event)}
          defaultValue={editModeDefaultValue}
        />
      )}

      {isEditMode && isEditAsTextArea && (
        <textarea
          tw="border border-black py-1 px-2 rounded-md focus:border-cu-pink focus:outline-none focus:text-cu-pink"
          onChange={(event) => debouncedTextAreaOnChangeHandler(event)}
          defaultValue={editModeDefaultValue}
          rows={3}
        />
      )}
    </div>
  )
}

export default ProfileDetails
