import './style.css';
import { Room } from '../Room';

export const RoomsList = () => {
	return (
		<section class="dark">
			<div class="container">
				<h2>Naše pokoje</h2>
				<p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
				<div class="cards-row">
					<Room />
				</div>
			</div>
		</section>
	);
};
