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
  isEditAsTextArea,
}) => {
  const { tmpUserProfile, setTmpUserProfile } = useProfileStore()

  const inputTextOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (profileKey && ['telephone', 'email'].includes(profileKey)) {
      const newTmpUserProfile = { ...tmpUserProfile, [profileKey]: e.target.value } as IUserProfile
      setTmpUserProfile(newTmpUserProfile)
    }
  }
  const debouncedOnChangeHandler = _.debounce(inputTextOnChangeHandler, 300)

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
      {isEditMode && isEditAsTextArea && (
        <input
          tw="border-2"
          onChange={(event) => debouncedOnChangeHandler(event)}
          defaultValue={editModeDefaultValue}
        />
      )}
    </div>
  )
}

export default ProfileDetails
