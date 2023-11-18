import './style.css';
import { Room } from '../Room';
import { useEffect } from 'react';
import { useState } from 'react';

export const RoomsList = ({ onSelect }) => {
	const [roomType, setRoomType] = useState([]);

	useEffect(() => {
		const fetchRoom = async () => {
			const response = await fetch('http://localhost:4000/api/pokoje');
			const data = await response.json();
			setRoomType(data.result);
			onSelect(data.result[0]);
		};
		fetchRoom();
	}, []);

	const handleSelect = (id) => {
		const selectedRoom = roomType.find((room) => room.id === id);
		console.log(id, selectedRoom);
		onSelect(selectedRoom);
	};

	return (
		<section class="dark">
			<div class="container">
				<h2>Naše pokoje</h2>
				<p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
				<div class="cards-row">
					{roomType.map((oneRoom) => (
						<Room
							key={oneRoom.id}
							id={oneRoom.id}
							type={oneRoom.type}
							price={oneRoom.price}
							description={oneRoom.description}
							image={oneRoom.image}
							onSelect={handleSelect}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
