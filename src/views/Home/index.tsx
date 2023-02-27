import type { NextPage } from 'next'
import tw from 'twin.macro'

// const Head = tw.div`
// 	bg-purple-300 grid grid-cols-1 gap-2 p-2
// 	md:(bg-purple-300 grid-cols-3)
// `

// const Item = tw.div`
//  h-24 rounded-3xl
// `

const TestGrid = tw.div`
  grid grid-rows-2 grid-flow-col gap-4 bg-normal-30
`
const TestDiv = tw.div`
  bg-cu-gold
`

interface IHomePageProps {}

const HomePage: NextPage<IHomePageProps> = () => {
  return (
    <TestGrid>
      <TestDiv className="text-homeMenu font-homeMenu">Home หน้าโฮม</TestDiv>
      <TestDiv className="text-h1 font-h1">Home หน้าโฮม</TestDiv>
      <TestDiv className="text-h2 font-h2">Home หน้าโฮม</TestDiv>
      <TestDiv className="text-body font-body">Home หน้าโฮม</TestDiv>
    </TestGrid>
  )
}
export default HomePage
