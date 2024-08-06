function NumbersTodo({ completed, total }) {
	return <h2>{verifyCompleted(completed, total)}</h2>;
}

function verifyCompleted(completed, total) {
	if (completed === 0 && total === 0) {
		return 'No has completado ninguna tarea aún. Crea una tarea y empieza ahora.';
	} else if (completed === total) {
		return '¡Felicitaciones! Completaste todas tus tareas.';
	} else {
		return `Completaste ${completed} de ${total} tareas.`;
	}
}

export { NumbersTodo };

// fontSize: '24px', color: '#219C90',textAlign: 'center',margin: '12px 0',padding: '0 10px',fontFamily: 'monospace', //
