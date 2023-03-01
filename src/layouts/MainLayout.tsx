import SideMenu from 'components/SideMenu'
import { FC } from 'react'
import 'twin.macro'
interface IMainLayoutProps {
  children?: React.ReactNode
}
const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return (
    <div tw="min-h-screen flex">
      <SideMenu />
      <div tw="flex flex-col w-full min-h-screen p-[50px]">{children}</div>
    </div>
  )
}

export default MainLayout
