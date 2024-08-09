import React, { useEffect } from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DarkOrLightMode({ lightMode, handleLightMode }) {
	useEffect(() => {
		const body = document.body;
		if (lightMode) {
			body.classList.add('lightMode');
		} else {
			body.classList.remove('lightMode');
		}
	});
	return (
		<button
			className={`ToggleTheme ${lightMode ? 'lightToggle' : 'darkToggle'}`}
			onClick={(e) => {
				e.preventDefault();
				handleLightMode(!lightMode);
				console.log(handleLightMode);
				console.log(lightMode);
			}}>
			{lightMode ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
		</button>
	);
}

export { DarkOrLightMode };
