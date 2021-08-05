import Image from "next/image";
import {
	SearchIcon,
	GlobeAltIcon,
	MenuIcon,
	UserCircleIcon,
} from "@heroicons/react/solid";

const Header = () => {
	return (
		<header className="sticky top-0 z-50  grid grid-cols-3 bg-pink-50 shadow-md py-5 px-5 md:px-10">
			{/*left*/}

			<div className="relative flex items-center h-10 w-30 cursor-pointer my-auto ">
				<Image src="/images/Airbnb-Logo.png" width={100} height={35} />
			</div>

			{/*center*/}
			<div className="flex items-center md:border-2 rounded-full py-2 md: shadow-md">
				<input
					type="text"
					placeholder="Search"
					className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-500 placeholder-gray-400"
				/>
				<SearchIcon className="hidden md:inline h-8 bg-purple-300 text-white rounded-full p-2  pl-2 cursor-pointer mx-2 " />
			</div>

			{/*right*/}
			<div className="flex items-center space-x-4 justify-end text-purple-500">
				<p className="hidden md:inline">Become an Host</p>
				<GlobeAltIcon className="h-6" />
				<div className="flex items-center space-x-2 b-2 p-2 rounded-full">
					<MenuIcon className="h-6" />
					<UserCircleIcon className="h-6" />
				</div>
			</div>
		</header>
	);
};

export default Header;
