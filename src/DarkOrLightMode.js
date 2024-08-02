import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DarkOrLightMode() {
	return (
		<button className="Clarity">
			<FontAwesomeIcon icon={faSun} />
		</button>
	);
}

export { DarkOrLightMode };
