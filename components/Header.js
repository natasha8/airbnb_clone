import { useState } from "react";
import Image from "next/image";
import {
	SearchIcon,
	GlobeAltIcon,
	MenuIcon,
	UserCircleIcon,
	UserIcon,
} from "@heroicons/react/solid";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Header = ({ placeholder }) => {
	const [searchInput, setSearchInput] = useState("");
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [noOfGuest, setNoOfGuest] = useState(1);
	const router = useRouter();
	const search = () => {
		router.push({
			pathname: "/search",
			query: {
				location: searchInput,
				startDate: startDate.toISOString(),
				endDate: endDate.toISOString(),
				noOfGuest,
			},
		});
	};

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: "selection",
	};
	const handleSelect = (ranges) => {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};
	const resetInput = () => {
		setSearchInput("");
		setStartDate(new Date());
		setEndDate(new Date());
	};

	return (
		<header className="sticky top-0 z-50  grid grid-cols-3 bg-blue-50 shadow-md py-5 px-5 md:px-10">
			{/*left*/}

			<div
				onClick={() => router.push("/")}
				className="relative flex items-center h-10 w-30 cursor-pointer my-auto "
			>
				<Image src="/images/Airbnb-Logo.png" width={100} height={35} />
			</div>

			{/*center*/}
			<div className="flex items-center md:border-2 rounded-full py-2 md: shadow-md">
				<input
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
					type="text"
					placeholder={placeholder || "Search"}
					className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-500 placeholder-gray-400"
				/>
				<SearchIcon className="hidden md:inline h-8 bg-purple-300 text-white rounded-full p-2  pl-2 cursor-pointer mx-2 " />
			</div>

			{/*right*/}
			<div className="flex items-center space-x-4 justify-end text-purple-600">
				<p className="hidden md:inline">Become an Host</p>
				<GlobeAltIcon className="h-6" />
				<div className="flex items-center space-x-2 b-2 p-2 rounded-full">
					<MenuIcon className="h-6" />
					<UserCircleIcon className="h-6" />
				</div>
			</div>
			{searchInput && (
				<div className="flex flex-col col-span-3 mx-auto space-x-2">
					<DateRangePicker
						ranges={[selectionRange]}
						minDate={new Date()}
						months={1}
						rangeColors={["#AA50FF"]}
						onChange={handleSelect}
						direction="horizontal"
					/>

					<div className="flex items-center border-b my-4 shadow-sm rounded-sm">
						<h2 className="text-2xl flex-grow font-semibold">
							No. of Guest
						</h2>
						<UserIcon className="h-5 pr-3" />
						<input
							value={noOfGuest}
							onChange={(e) => setNoOfGuest(e.target.value)}
							type="number"
							min={1}
							max={16}
							className="w-16 pl-2 text-lg outline-none text-purple-500"
						/>
					</div>
					<div className="flex">
						<button
							onClick={resetInput}
							className="flex-grow text-purple-500  bg-green-200 rounded-full p-2"
						>
							Cancel
						</button>
						<button
							onClick={search}
							className="flex-grow text-purple-800 bg-purple-200 rounded-full"
						>
							Search
						</button>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
