import PreAuthFooter from 'components/Footers/PreAuthFooter'
import SideMenu from 'components/SideMenu'
import { FC } from 'react'
import 'twin.macro'

interface IPreAuthLayoutProps {
  children?: React.ReactNode
}
const PreAuthLayout: FC<IPreAuthLayoutProps> = ({ children }) => {
  return (
    <div tw="min-h-screen flex">
      <SideMenu />
      <div tw="flex flex-col w-full min-h-screen p-[50px]">
        <div tw="flex flex-col" className="grow">
          {children}
        </div>
        <PreAuthFooter />
      </div>
    </div>
  )
}

export default PreAuthLayout
