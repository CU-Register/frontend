import type { NextPage } from "next";
import tw from "twin.macro";

const Head = tw.div`
	bg-purple-300 grid grid-cols-1 gap-2 p-2 
	md:(bg-purple-300 grid-cols-3)
`;

const Item = tw.div`
	bg-purple-600 h-24 rounded-3xl transition-all duration-100
	hover:(bg-purple-400 rounded-md)
`;
const Home: NextPage = () => {
	return (
		<Head>
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
		</Head>
	);
};

export default Home;
