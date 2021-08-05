import Image from "next/image";
function SmallCard({ img, location, distance }) {
	return (
		<div
			className="flex items-center m-2 space-x-4 rounded-2xl cursor-pointer border-2  border-pink-200 shadow-2xl
        hover:bg-pink-200 hover:scale-105 transition transform duration-200 ease-out"
		>
			{/* Left*/}
			<div className="relative h-16 w-16 ">
				<Image src={img} layout="fill" className="rounded-2xl" />
			</div>
			{/*Right*/}
			<div className="">
				<h2>{location}</h2>
				<h3 className="text-purple-900">{distance}</h3>
			</div>
		</div>
	);
}

export default SmallCard;
