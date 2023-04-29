import { FC } from 'react'
import 'twin.macro'
import tw from 'twin.macro'
interface IProfileDetailsProps {
  label: string
  value: string
  valueColor?: 'text-gray' | 'text-green-600'
  isEditMode: boolean
  isEditAsOption?: boolean
  isEditAsTextArea?: boolean
}
const ProfileDetails: FC<IProfileDetailsProps> = ({
  label,
  value,
  valueColor,
  isEditMode,
  isEditAsOption,
  isEditAsTextArea,
}) => {
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
      {isEditMode && isEditAsTextArea && <div>edit as a text area</div>}
    </div>
  )
}

export default ProfileDetails
