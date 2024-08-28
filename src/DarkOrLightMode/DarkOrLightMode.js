import React, { useEffect } from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DarkOrLightMode({ lightMode, handleLightMode }) {
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
