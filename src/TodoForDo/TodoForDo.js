import React from 'react';
import { TodoContext } from '../TodoContext/index';

function TodoForDo() {
	const { lightMode } = React.useContext(TodoContext);
	return <h1 className={`TodoForDoDark ${lightMode ? 'TodoForDoLight' : ''}`}>To do \-/ For do</h1>;
}

export { TodoForDo };
