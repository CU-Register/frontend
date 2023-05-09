import { IDocumentInfoTimeline } from 'interfaces/Document'
import { FC } from 'react'
import 'twin.macro'
import tw from 'twin.macro'
import { formatDateTimeFromDate, fullNameFormatter } from 'utils/formats'

interface IStatusStepperProps {
  timeline: IDocumentInfoTimeline[]
  totalSteps: number
  currentSteps: number
}
const StatusStepper: FC<IStatusStepperProps> = ({ timeline, totalSteps, currentSteps }) => {
  const remainingSteps = totalSteps - currentSteps
  console.log('remaining steps', remainingSteps)

  return (
    <div>
      {timeline.map((tl, index) => {
        return (
          <div key={index}>
            <div tw="flex gap-10 items-center">
              <div tw="bg-cu-pink w-7 h-7 rounded-full" />
              <div tw="font-h2 text-h2 text-cu-pink">
                {fullNameFormatter(tl.actor.firstname.th, tl.actor.lastname.th)}
              </div>
            </div>
            <div
              css={[
                tw`ml-[calc(14px - 1px)] border-l-2 border-cu-pink  pl-[calc(5rem - 1.25rem)] min-h-[40px]`,
                index === remainingSteps - 1 && tw`border-0`,
              ]}
            >
              <div tw="font-h3 text-h3 text-cu-grey">{formatDateTimeFromDate(`${tl.timestamp}Z`)}</div>
            </div>
          </div>
        )
      })}
      {Array(remainingSteps)
        .fill(0)
        .map((_, index) => {
          return (
            <div key={index}>
              <div tw="flex gap-10 items-center">
                <div tw="bg-gray w-7 h-7 rounded-full" />
              </div>
              <div
                css={[
                  tw`ml-[calc(14px - 1px)] border-l-2 border-gray  pl-[calc(5rem - 1.25rem)] min-h-[40px]`,
                  index === remainingSteps - 1 && tw`border-0`,
                ]}
              />
            </div>
          )
        })}
    </div>
  )
}

export default StatusStepper
