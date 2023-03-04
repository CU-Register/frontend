import SideMenu from 'components/SideMenu'
import { FC } from 'react'
import 'twin.macro'
interface IMainLayoutProps {
  children?: React.ReactNode
  header: string
  studentId: string
}
const MainLayout: FC<IMainLayoutProps> = ({ children, header, studentId }) => {
  return (
    <div tw="min-h-screen flex">
      <SideMenu />
      <div tw="flex flex-col w-full min-h-screen p-[50px]">
        <div tw="mb-8">
          <div tw="text-h1 font-h1 text-cu-pink">{header}</div>
          <div tw="mt-2 text-h2 font-h2 text-black pl-4">{`เลขประจำตัว: ${studentId}`}</div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default MainLayout
