import './style.css';
import { RoomDetail } from '../../components/RoomDetail';
import { Contacts } from '../../components/Contacts';
import { Banner } from '../../components/Banner';
import { RoomsList } from '../../components/RoomsList';
import { useState } from 'react';

export const HomePage = () => {
	const [selectedRoom, setSelectedRoom] = useState(null);
	return (
		<div>
			<Banner />
			<RoomsList
				onSelect={(room) => {
					setSelectedRoom(room);
				}}
			/>
			{selectedRoom !== null ? (
				<RoomDetail
					key={selectedRoom.id}
					type={selectedRoom.type}
					price={selectedRoom.price}
					description={selectedRoom.description}
					image={selectedRoom.image}
				/>
			) : null}
			<Contacts />
		</div>
	);
};
