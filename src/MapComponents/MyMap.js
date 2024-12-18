import React, { useState } from 'react';
import { Map, Marker, ZoomControl } from 'pigeon-maps';
import InfoBox from './InfoBox';

export function MyMap({ eventsData }) {

	// const getLocation = () => {
	// 	if (!navigator.geolocation) {
	// 	  console.log('Geolocation is not supported by your browser');
	// 	} else {
	// 	  console.log('Locating...');
	// 	  navigator.geolocation.getCurrentPosition((position) => {
	// 		console.log(position.coords.latitude);
	// 		console.log(position.coords.longitude);
	// 	  }, () => {
	// 		console.log('Unable to retrieve your location');
	// 	  });
	// 	}
	//   }

	const [ center, setCenter ] = useState([38.984834, -105.793289]);
	const [eventInfo, setEventInfo] = useState();
	const [ zoom, setZoom ] = useState(7);
	const color = '#FF0000';


	return (
		<>
		<Map
			height={1120}
			center={center}
			zoom={zoom}
			onBoundsChanged={({ center, zoom }) => {
				setCenter(center);
				setZoom(zoom);
			}}>
			{eventsData.map((event) => {
				const lat = event.geometry.coordinates[1];
				const lng = event.geometry.coordinates[0];

				return <Marker 
					key={[lat, lng]} 
					width={50} 
					anchor={[lat, lng]} 
					color={color} 
					onClick={() => setEventInfo({
						id: event.properties.id,
						title: event.properties.title,
						description: event.properties.description
					})} />;
			})}
			<ZoomControl></ZoomControl>
		</Map>
			{eventInfo && <InfoBox info={eventInfo}></InfoBox>}
		</>
	);
}

export default MyMap;
