import React from 'react';
import { withStorageListener } from './withStorageListener';

function ChangeAlert({ show, toggleShow }) {
	return show ? (
		<div>
			<button className="ChangeAlertButton" onClick={() => toggleShow(false)}>
				Refrescar para aplicar cambios
			</button>
		</div>
	) : null;
}

const ChangeAlertwithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertwithStorageListener };
