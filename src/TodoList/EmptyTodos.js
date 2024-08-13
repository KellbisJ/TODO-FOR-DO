import React from 'react';
import { TodoContext } from '../TodoContext/index';

function EmptyTodos() {
	const { lightMode } = React.useContext(TodoContext);
	return <p className={`${lightMode ? 'darkModeItem' : 'lightModeItem'}`}>Empty</p>;
	// <p>You need to create your first Todo!</p>;
}

export { EmptyTodos };
