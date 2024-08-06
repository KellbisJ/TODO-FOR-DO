import React, { useEffect } from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DarkOrLightMode({ lightMode, setLightMode }) {
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
			className="Clarity"
			onClick={(e) => {
				e.preventDefault();
				setLightMode(!lightMode);
			}}>
			{lightMode ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
		</button>
	);
}

export { DarkOrLightMode };
