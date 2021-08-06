import Image from "next/image";
import { useRouter } from "next/router";

const Banner = () => {
	const router = useRouter();

	return (
		<div className="relative h-[500px] sm:h-[400px] md:h-[500px] xl:h-[600px] 2xl:h-[700px]">
			<Image
				src="/images/banner.png"
				layout="fill"
				objectFit="cover"
				objectPosition="center"
				alt="Banner"
			/>
			<div className="absolute top-1/4 w-1/2 text-left pl-5 shadow-lg rounded md:top/1/3 md:pl-20 md:shadow-none ">
				<h2 className="text-2xl text-white font-bold break-words md:text-3xl ">
					DON'T YOU KNOW
				</h2>
				<h2 className="text-2xl text-white font-bold break-words md:text-3xl ">
					WHERE TO GO?
				</h2>
				<button
					className="text-purple-500 font-semibold bg-purple-100 rounded-full ml-1
                px-10 m-6 py-4 shadow-md hover:shadow-xl 
                active:scale-90 transition duration-75"
				>
					Find
				</button>
			</div>
		</div>
	);
};

export default Banner;
