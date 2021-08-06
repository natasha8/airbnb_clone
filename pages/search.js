import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

const Search = ({ searchResults }) => {
	const router = useRouter();
	const { location, startDate, endDate, noOfGuest } = router.query;
	const formatStartDate = format(new Date(startDate), "dd MMMM yyyy");
	const formatEndDate = format(new Date(startDate), "dd MMMM yyyy");
	const range = `${formatStartDate} - ${formatEndDate}`;

	return (
		<div className="bg-blue-50">
			<Header
				placeholder={`${location} | ${range} | ${noOfGuest} guests`}
			/>
			<main className="flex ">
				<section className="flex-grow pt-14 px-8">
					<p className="text-xs">
						300+ stays - {range} - for {noOfGuest} Guest in
					</p>
					<h1 className="text-3xl font-semibold mt-2 mb-6">
						{location}
					</h1>
					<div className="hidden lg:inline-flex mb-5 space-x-3 text-purple-800 whitespace-nowrap">
						<p className="button">Cancellation Flexibility</p>
						<p className="button">Type of Place</p>
						<p className="button">Price</p>
						<p className="button">Rooms</p>
						<p className="button">More Filter</p>
					</div>
					<div className="flex flex-col">
						{searchResults.map(
							({
								img,
								description,
								title,
								start,
								price,
								total,
								location,
							}) => (
								<InfoCard
									key={img}
									img={img}
									location={location}
									description={description}
									title={title}
									start={start}
									price={price}
									total={total}
								/>
							)
						)}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default Search;

export async function getServerSideProps() {
	const searchResults = await fetch("http://links.papareact.com/isz").then(
		(res) => res.json()
	);
	return {
		props: {
			searchResults,
		},
	};
}
