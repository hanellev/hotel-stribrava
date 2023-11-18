import './style.css';
export const RoomReservation = () => {
	return (
		<form>
			<div class="form-fields">
				<label htmlFor="field1" class="field-label">
					Od:
				</label>
				<input id="field1" class="field-input" type="date" />

				<label htmlFor="field2" class="field-label">
					Do:
				</label>
				<input id="field2" class="field-input" type="date" />
				<label htmlFor="field1" class="field-label">
					Počet osob:
				</label>
				<input id="field1" class="field-input" type="number" />
				<label htmlFor="select" class="field-label">
					Stravování:
				</label>
				<select id="select" class="field-input">
					<option>Bez stravování</option>
					<option>Snídaně</option>
					<option>Polopenze</option>
					<option>Plná penze</option>
				</select>

				<label htmlFor="check1" class="field-label">
					Domácí mazlíček:
				</label>
				<input id="check1" class="field-input" type="checkbox" />
				<label htmlFor="check1" class="field-label">
					Přistýlka pro dítě:
				</label>
				<input id="check1" class="field-input" type="checkbox" />
				<label htmlFor="check1" class="field-label">
					Bezbariérový přístup:
				</label>
				<input id="check1" class="field-input" type="checkbox" />

				<label htmlFor="field1" class="field-label">
					Email:
				</label>
				<input id="field1" class="field-input" type="email" />

				<label htmlFor="field2" class="field-label">
					Telefon:
				</label>
				<input id="field2" class="field-input" type="tel" />
			</div>
			<button class="wide">Submit</button>
		</form>
	);
};
