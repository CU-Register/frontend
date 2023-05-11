import { faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DocumentHistoryActionEnum } from 'enums/Document'
import { IDocumentInfoStakeHolder, IDocumentInfoTimeline } from 'interfaces/Document'
import { FC } from 'react'
import 'twin.macro'
import tw from 'twin.macro'
import { formatDateTimeFromDate, fullNameFormatter } from 'utils/formats'

interface IStatusStepperProps {
  timeline: IDocumentInfoTimeline[]
  totalSteps: number
  currentSteps: number
  holder: IDocumentInfoStakeHolder
}
const StatusStepper: FC<IStatusStepperProps> = ({ timeline, totalSteps, currentSteps, holder }) => {
  const remainingSteps = totalSteps - timeline.length

  return (
    <div tw="ml-2">
      {timeline.map((tl, index) => {
        const isCurrentStepDeclined = currentSteps === index && tl.action === DocumentHistoryActionEnum.DECLINED
        const isCurrentStepApproved = currentSteps === index && tl.action === DocumentHistoryActionEnum.APPROVED
        return (
          <div key={index}>
            <div tw="flex gap-10 items-center">
              <div
                css={[
                  tw`bg-cu-pink w-7 h-7 rounded-full text-h2 text-white text-center`,
                  isCurrentStepDeclined && tw`bg-gray`,
                ]}
              >
                {isCurrentStepDeclined && <FontAwesomeIcon icon={faXmark} />}
                {isCurrentStepApproved && <FontAwesomeIcon icon={faCheck} />}
              </div>
              <div css={[tw`font-h2 text-h2 text-cu-pink`, isCurrentStepDeclined && tw`text-gray`]}>
                {fullNameFormatter(tl.actor.firstname.th, tl.actor.lastname.th)}
              </div>
            </div>
            <div
              css={[
                tw`ml-[calc(14px - 1px)] border-l-2 border-cu-pink  pl-[calc(5rem - 1.25rem)] min-h-[40px]`,
                index === timeline.length - 1 && remainingSteps > 0 && tw`border-gray`,
                index === timeline.length - 1 && remainingSteps === 0 && tw`border-0`,
              ]}
            >
              <div tw="text-h3 text-gray font-thin">{tl.message.th}</div>
              <div tw="text-h3 text-gray font-thin">{formatDateTimeFromDate(`${tl.timestamp}Z`)}</div>
            </div>
          </div>
        )
      })}
      {remainingSteps > 0 &&
        Array(remainingSteps)
          .fill(0)
          .map((_, index) => {
            const isCurrentStep = currentSteps === timeline.length + index
            return (
              <div key={index}>
                <div tw="flex gap-10 items-center">
                  <div
                    css={[
                      tw`bg-gray w-7 h-7 rounded-full text-white text-center flex items-center justify-center`,
                      isCurrentStep && tw`scale-125`,
                    ]}
                  >
                    {isCurrentStep && <FontAwesomeIcon icon={faSpinner} />}
                  </div>
                  <div css={[tw`font-h2 text-h2 text-cu-pink mt-2`, isCurrentStep && tw`text-gray`]}>
                    {isCurrentStep && fullNameFormatter(holder.firstname.th, holder.lastname.th)}
                  </div>
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
