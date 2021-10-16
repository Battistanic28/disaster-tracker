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

	const [ center, setCenter ] = useState([ 40.808886, -96.707775 ]);
	const [eventInfo, setEventInfo] = useState();
	const [ zoom, setZoom ] = useState(5);
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
				const lat = event.geometry[0].coordinates[1];
				const lng = event.geometry[0].coordinates[0];

				return <Marker 
					key={[lat, lng]} 
					width={50} 
					anchor={[lat, lng]} 
					color={color} 
					onClick={() => setEventInfo({id: event.id, title: event.title})} />;
			})}
			<ZoomControl></ZoomControl>
		</Map>
			{eventInfo && <InfoBox info={eventInfo}></InfoBox>}
			<p>Powered by PigeonMaps</p>
		</>
	);
}

export default MyMap;
