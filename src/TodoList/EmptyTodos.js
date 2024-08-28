import React from 'react';

function EmptyTodos({ lightMode }) {
	return <p className={`${lightMode ? 'darkModeItem' : 'lightModeItem'}`}>No se han encontrado resultados</p>;
	// <p>You need to create your first Todo!</p>;
}

export { EmptyTodos };
