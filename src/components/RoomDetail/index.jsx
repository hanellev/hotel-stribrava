import { RoomReservation } from '../../components/RoomReservation';

export const RoomDetail = ({ type, description, price, image }) => {
	return (
		<div>
			<section class="light">
				<div class="container">
					<h2>
						Pokoj {type}, {price} na osobu za noc
					</h2>
					<div class="columns-2">
						<div class="column">
							<img src={image} />
							<p>{description}</p>
						</div>
					</div>
					<RoomReservation />
				</div>
			</section>
		</div>
	);
};
