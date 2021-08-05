import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardData }) {
	return (
		<div className="h-full bg-pink-100 ">
			<Head>
				<title>Airbnb</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Banner />

			<main className="max-w-7xl mx-auto px-8 sm:px-16 shadow-xl rounded-lg my-12">
				<section className="pt-6">
					<h2 className="text-4xl font-semibold pb-5">
						Explore Nearby
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
						{exploreData?.map((item) => (
							<SmallCard
								key={item.img}
								img={item.img}
								distance={item.distance}
								location={item.location}
							/>
						))}
					</div>
				</section>
				<section>
					<h2 className="text-4xl font-semibold py-8">
						<h2>Go Anywhere</h2>
					</h2>
					<div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
						{cardData?.map(({ img, title }) => (
							<MediumCard key={img} img={img} title={title} />
						))}
					</div>
				</section>
				<section>
					<div>
						<LargeCard
							img="/images/largeBanner.jpg"
							title="The Greatest Outdoors "
							description="Wishlist cured by Airbnb"
							buttonText="Get Ispired!"
						/>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export async function getStaticProps() {
	const exploreData = await fetch("https://links.papareact.com/pyp").then(
		(res) => res.json()
	);
	const cardData = await fetch("https://links.papareact.com/zp1").then(
		(res) => res.json()
	);
	return {
		props: { exploreData, cardData },
	};
}
