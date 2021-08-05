import Image from "next/Image";

const Banner = () => {
	return (
		<div className="relative h-[500px] sm:h-[400px] md:h-[500px] xl:h-[600px] 2xl:h-[700px]">
			<Image
				src="/images/banner.png"
				layout="fill"
				objectFit="cover"
				objectPosition="center"
				alt="Banner"
			/>
			<div className="absolute top-1/2 w-1/2 text-center">
				<h2 className="text-3xl text-white font-bold break-words ">
					DON'T YOU KNOW
				</h2>
				<h2 className="text-3xl text-white font-bold break-words ">
					WHERE TO GO?
				</h2>
				<button
					className="text-purple-500 font-semibold bg-purple-100 rounded-full 
                px-10 m-6 py-4 shadow-md hover:shadow-xl 
                active:scale-90 transition duration-75"
				>
					Find out now
				</button>
			</div>
		</div>
	);
};

export default Banner;
