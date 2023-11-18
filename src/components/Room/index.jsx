import './style.css';
export const Room = ({ id, type, price, image, onSelect }) => {
	return (
		<div
			class="card"
			onClick={() => {
				onSelect(id);
			}}
		>
			<img class="card__image" src={image} />
			<div class="card__title">{type}</div>
			<div class="card__body">{price} kč na osobu</div>
		</div>
	);
};
