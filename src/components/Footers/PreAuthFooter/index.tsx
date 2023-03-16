import HorizontalDivider from 'components/Dividers/HorizontalDivider'
import { FC } from 'react'
import 'twin.macro'
const PreAuthFooter: FC = () => {
  return (
    <>
      <HorizontalDivider />
      <div tw="mt-5 font-body text-body text-black">
        นิสิตสามารถติดต่อเรื่องการยื่นคำร้องเพื่อขอเอกสารสำคัญทางการศึกษา ได้ที่สำนักบริหารเทคโนโลยีสารสนเทศ
        อาคารจามจุรี 3 ชั้น 4. โทร. 02- 218-3314 อีเมล์ help@chula.ac.th
      </div>
    </>
  )
}

export default PreAuthFooter
