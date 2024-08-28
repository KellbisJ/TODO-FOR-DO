import React from 'react';
import './TodoSystem.css';

function TodoSystem({ children, lightMode }) {
	return <div className={`TodoSystem ${lightMode ? 'TodoSystemLight' : ''}`}>{children}</div>;
}

export { TodoSystem };
