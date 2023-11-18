import './style.css';
import { RoomReservation } from '../../components/RoomReservation';
import { RoomDetail } from '../../components/RoomDetail';
import { Contacts } from '../../components/Contacts';
import { Banner } from '../../components/Banner';
import { RoomsList } from '../../components/RoomsList';

export const HomePage = () => {
	return (
		<div>
			<Banner />
			<RoomsList />
			<section class="light">
				<div class="container">
					<h2>Heading</h2>
					<RoomDetail />
					<RoomReservation />
				</div>
			</section>
			<Contacts />
		</div>
	);
};
