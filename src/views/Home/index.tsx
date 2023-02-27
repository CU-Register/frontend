import SideMenu from 'components/ SideMenu'
import type { NextPage } from 'next'
import 'twin.macro'

interface IHomePageProps {}
const HomePage: NextPage<IHomePageProps> = () => {
  return (
    <div tw="h-screen bg-cu-gold">
      <SideMenu />
    </div>
  )
}
export default HomePage
