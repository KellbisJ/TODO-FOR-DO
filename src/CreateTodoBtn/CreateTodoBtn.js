import React from 'react';
import { TodoContext } from '../TodoContext/index';

function CreateTodoBtn() {
	const { openModal, setOpenModal, totalTodos } = React.useContext(TodoContext);
	return (
		<button
			className={`AddTodo ${totalTodos === 0 ? 'buttonCreateTodoTransition' : ''}`}
			onClick={(e) => {
				e.preventDefault();
				setOpenModal(!openModal);
			}}>
			+
		</button>
	);
}
export { CreateTodoBtn };
