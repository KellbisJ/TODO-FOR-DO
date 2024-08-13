import React from 'react';
import { TodoContext } from '../TodoContext/index';

function NumbersTodo() {
	const { completedTodos, totalTodos, lightMode, loading } = React.useContext(TodoContext);
	return (
		<h2 className={`NumbersTodo ${lightMode ? 'NumbersTodoLight' : ''}`}>{loading ? 'Loading...' : verifyCompleted(completedTodos, totalTodos)}</h2>
	);
}

// {
// 	completed, total, lightMode, loading;
// }

function verifyCompleted(completed, total) {
	if (completed === 0 && total === 0) {
		return 'No has creado ninguna tarea aún. Crea una tarea y empieza ahora.';
	} else if (completed === total) {
		return '¡Felicitaciones! Completaste todas tus tareas.';
	} else {
		return `Completaste ${completed} de ${total} tareas.`;
	}
}

export { NumbersTodo };

// fontSize: '24px', color: '#219C90',textAlign: 'center',margin: '12px 0',padding: '0 10px',fontFamily: 'monospace', //
