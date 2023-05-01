import { IUserProfile } from 'interfaces/Profile'
import _ from 'lodash'
import { FC } from 'react'
import { useProfileStore } from 'stores/profile.stores'
import 'twin.macro'
import tw from 'twin.macro'
interface IProfileDetailsProps {
  label: string
  profileKey?: string
  value: string
  editModeDefaultValue?: string
  //TODO: Fix editOptions type
  editOptions?: any
  valueColor?: 'text-gray' | 'text-green-600'
  isEditMode: boolean
  isEditAsOption?: boolean
  isEditAsInput?: boolean
  isEditAsTextArea?: boolean
}
const ProfileDetails: FC<IProfileDetailsProps> = ({
  label,
  profileKey,
  value,
  editModeDefaultValue,
  valueColor,
  isEditMode,
  isEditAsOption,
  isEditAsInput,
  isEditAsTextArea,
}) => {
  const { tmpUserProfile, setTmpUserProfile } = useProfileStore()

  const inputTextOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (profileKey && ['telephone', 'email'].includes(profileKey)) {
      const newTmpUserProfile = { ...tmpUserProfile, [profileKey]: event.target.value } as IUserProfile
      setTmpUserProfile(newTmpUserProfile)
    }
  }
  const textAreaOnchangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (profileKey && ['address'].includes(profileKey)) {
      const newTmpUserProfile = { ...tmpUserProfile, [profileKey]: event.target.value } as IUserProfile
      setTmpUserProfile(newTmpUserProfile)
    }
  }
  const debouncedInputOnChangeHandler = _.debounce(inputTextOnChangeHandler, 300)
  const debouncedTextAreaOnChangeHandler = _.debounce(textAreaOnchangeHandler, 300)

  return (
    <div tw="grid grid-cols-[1fr 2fr] gap-4 text-h2 font-h2 text-black">
      <div tw="text-gray">{label}</div>
      {!isEditMode && (
        <div
          css={[
            tw`flex break-all`,
            valueColor == 'text-gray' && tw`text-gray`,
            valueColor == 'text-green-600' && tw`text-green-600`,
          ]}
          className="text-start"
        >
          {value}
        </div>
      )}
      {isEditMode && isEditAsOption && <div>edit as options</div>}
      {isEditMode && isEditAsInput && (
        <input
          tw="border-2 border-black py-1 px-2 rounded-md focus:border-cu-pink focus:outline-none focus:text-cu-pink"
          className="focus:border-pink-500"
          onChange={(event) => debouncedInputOnChangeHandler(event)}
          defaultValue={editModeDefaultValue}
        />
      )}

      {isEditMode && isEditAsTextArea && (
        <textarea
          tw="border-2 border-black py-1 px-2 rounded-md focus:border-cu-pink focus:outline-none focus:text-cu-pink"
          onChange={(event) => debouncedTextAreaOnChangeHandler(event)}
          defaultValue={editModeDefaultValue}
          rows={3}
        />
      )}
    </div>
  )
}

export default ProfileDetails
