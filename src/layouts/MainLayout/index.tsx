import MainFooter from 'components/Footers/MainFooter'
import SideMenu from 'components/SideMenu'
import { FC, useState } from 'react'
import { useProfileStore } from 'stores/profile.store'
import 'twin.macro'
import tw from 'twin.macro'
interface IMainLayoutProps {
  children?: React.ReactNode
  header?: string
}

const MainLayout: FC<IMainLayoutProps> = ({ children, header }) => {
  const [showMenu, setShowMenu] = useState(false)
  const { userProfile } = useProfileStore()
  const handleClick = () => {
    setShowMenu((isShow) => !isShow)
  }

  const handleClose = () => {
    setShowMenu(false)
  }
  return (
    <div tw="h-screen flex">
      <SideMenu isShow={showMenu} />
      {!showMenu && (
        <div onClick={handleClick} tw="md:invisible fixed top-4 left-4 w-16 h-16 cursor-pointer">
          <svg height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px">
            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2 s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2 S29.104,22,28,22z" />
          </svg>
        </div>
      )}
      <div
        css={[tw`flex flex-col w-full h-screen p-[50px]`, showMenu && tw`blur-sm md:blur-none`]}
        onClick={handleClose}
      >
        <div>{header && <div tw="text-h1 font-h1 text-cu-pink">{header}</div>}</div>
        <div className="flex flex-col flex-1 overflow-auto">{children}</div>
        <MainFooter />
      </div>
    </div>
  )
}

export default MainLayout
