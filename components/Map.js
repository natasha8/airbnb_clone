import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

const Map = ({ searchResults }) => {
	const [selectLocation, setSelectedLocation] = useState({});
	const [viewport, setViewport] = useState({
		width: "100%",
		height: "100%",
		latitude: center.latitude,
		longitude: center.longitude,
		zoom: 11,
	});
	const coordinates = searchResults.map((result) => {
		longitude: result.long;
		latitude: result.lat;
	});

	const center = getCenter(coordinates);

	return (
		<div>
			<ReactMapGL
				mapStyle="mapbox://styles/incptd/cks0i5eun3tla18p6m3grfqhb"
				mapboxApiAccessToken={process.env.mapbox_key}
				{...viewport}
				onViewportChange={(nextViewport) => setViewport(nextViewport)}
			>
				{searchResults.map((result) => (
					<div>
						<Marker
							long={result.long}
							lat={result.lat}
							offset={result.offset}
						>
							<p
								role="img"
								onClick={() => setSelectedLocation(result)}
								className="cursor-pointer text-2xl animate-bounce"
								aria-label="push-pin"
							></p>
						</Marker>
						{/*popup*/}

						{
							(selectLocation,
							long === result.long ? (
								<Popup
									onClose={() => setSelectedLocation({})}
									closeOnClick={() => setSelectedLocation}
								>
									{result.title}
								</Popup>
							) : (
								false
							))
						}
					</div>
				))}
			</ReactMapGL>
		</div>
	);
};

export default Map;
