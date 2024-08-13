import React from 'react';
import './TodoSystem.css';
import { TodoContext } from '../TodoContext/index';

function TodoSystem({ children }) {
	const { lightMode } = React.useContext(TodoContext);
	return <div className={`TodoSystem ${lightMode ? 'TodoSystemLight' : ''}`}>{children}</div>;
}

export { TodoSystem };
