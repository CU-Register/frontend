import type { NextPage } from 'next'
import tw from 'twin.macro'

// const Head = tw.div`
// 	bg-purple-300 grid grid-cols-1 gap-2 p-2
// 	md:(bg-purple-300 grid-cols-3)
// `

// const Item = tw.div`
//  h-24 rounded-3xl
// `

const TestDiv = tw.div`
  bg-gray
`

interface IHomePageProps {}

const HomePage: NextPage<IHomePageProps> = () => {
  return <TestDiv>Home หน้าโฮม</TestDiv>
}
export default HomePage
