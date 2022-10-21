import type { NextPage } from "next";
import tw from "twin.macro";

const Head = tw.div`
	bg-red-200 
	hover:(ring ring-purple-200 bg-purple-400 border-purple-200)
	md:(bg-purple-300)
`;
const Home: NextPage = () => {
	return <Head>asdfasdf</Head>;
};

export default Home;
