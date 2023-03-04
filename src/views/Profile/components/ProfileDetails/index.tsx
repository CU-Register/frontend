import { FC } from 'react'
import 'twin.macro'
import tw from 'twin.macro'
interface IProfileDetailsProps {
  label: string
  value: string
  valueColor?: 'text-gray' | 'text-green-600'
}
const ProfileDetails: FC<IProfileDetailsProps> = ({ label, value, valueColor }) => {
  return (
    <div tw="grid grid-cols-2 text-h2 font-h2 text-black gap-12">
      <div>{label}</div>
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
    </div>
  )
}

export default ProfileDetails
