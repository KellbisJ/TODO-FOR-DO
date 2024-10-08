import React from 'react';

function NumbersTodo({ completedTodos, totalTodos, lightMode, loading }) {
	return (
		<h2 className={`NumbersTodo ${lightMode ? 'NumbersTodoLight' : ''}`}>{loading ? 'Loading...' : verifyCompleted(completedTodos, totalTodos)}</h2>
	);
}

function verifyCompleted(completed, total) {
	if (completed === 0 && total === 0) {
		return 'No has creado ninguna tarea aún. Crea una tarea y empieza ahora.';
	} else if (completed === total) {
		return `¡Felicitaciones! Completaste todas tus tareas.`;
	} else {
		return `Has completado ${completed} de ${total} tareas.`;
	}
}

export { NumbersTodo };
