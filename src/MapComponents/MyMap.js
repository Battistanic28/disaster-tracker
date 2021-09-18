import React, { useState } from 'react';
import { Map, Marker } from 'pigeon-maps';
import InfoBox from './InfoBox';

export function MyMap({ eventsData }) {

	// get user Location
    // navigator.geolocation.getCurrentPosition(function(position) {
	// 	console.log("Latitude is :", position.coords.latitude);
	// 	console.log("Longitude is :", position.coords.longitude);
	//   });

	const [ center, setCenter ] = useState([ 40.014984, -105.270546 ]);
	const [eventInfo, setEventInfo] = useState();
	const [isClicked, setIsClicked] = useState(false);
	const [ zoom, setZoom ] = useState(11);
	const color = '#FF0000';

	function infoPopUp(evt) {
		setEventInfo({id: evt.id, title: evt.title})
	}

	return (
		<>
		<Map
			height={700}
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
		</Map>
			{eventInfo && <InfoBox setIsClicked={setIsClicked} info={eventInfo}></InfoBox>}
		</>
	);
}

export default MyMap;
