import React from 'react';
import { TodoContext } from '../TodoContext/index';

function AddTodoForm() {
	const { lightMode, setOpenModal } = React.useContext(TodoContext);
	return (
		<form
			className={`CreateTodoForm ${lightMode ? 'CreateTodoFormLight' : ''}`}
			onSubmit={(e) => {
				e.preventDefault();
			}}>
			<p className={`textCreateTodo ${lightMode ? 'textCreateTodoLight' : ''}`}>📝 Create a new task</p>
			<button className="closeModal" onClick={() => setOpenModal(false)}>
				x
			</button>
			<input className="inputCreateTodo" type="text" placeholder="Something for do"></input>
			<button className="buttonCreateTodo" type="submit">
				Agregar
			</button>
		</form>
	);
}

export { AddTodoForm };
