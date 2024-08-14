import React, { useEffect } from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TodoContext } from '../TodoContext/index';

function DarkOrLightMode() {
	const { lightMode, handleLightMode } = React.useContext(TodoContext);
	useEffect(() => {
		const body = document.body;
		lightMode ? body.classList.add('lightModeBody', 'transition') : body.classList.remove('lightModeBody');
	});
	return (
		<button
			className={`ToggleTheme ${lightMode ? 'lightToggle' : 'darkToggle'}`}
			onClick={(e) => {
				e.preventDefault();
				handleLightMode(!lightMode);
				// console.log(handleLightMode);
				// console.log(lightMode);
			}}>
			{lightMode ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
		</button>
	);
}

export { DarkOrLightMode };
