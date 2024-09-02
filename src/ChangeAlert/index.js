import React from 'react';
import { useStorageListener } from './useStorageListener';

function ChangeAlert({ SynchronizedTodos }) {
	const { show, toggleShow } = useStorageListener(SynchronizedTodos);
	return show ? (
		<div>
			<button className="ChangeAlertButton" onClick={() => toggleShow(false)}>
				Refrescar para aplicar cambios
			</button>
		</div>
	) : null;
}

export { ChangeAlert };
