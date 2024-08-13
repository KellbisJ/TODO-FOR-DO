import React from 'react';
import { TodoContext } from '../TodoContext/index';

function EmptyTodos() {
	const { lightMode } = React.useContext(TodoContext);
	return <p className={`${lightMode ? 'darkModeItem' : 'lightModeItem'}`}>No todos! Add a todo to get started!</p>;
	// <p>You need to create your first Todo!</p>;
}

export { EmptyTodos };
