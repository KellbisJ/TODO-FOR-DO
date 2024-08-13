import React from 'react';
import { TodoContext } from '../TodoContext/index';

function CreateTodoBtn() {
	const { openModal, setOpenModal } = React.useContext(TodoContext);
	return (
		<button
			className="AddTodo"
			onClick={(e) => {
				e.preventDefault();
				setOpenModal(!openModal);
			}}>
			+
		</button>
	);
}
export { CreateTodoBtn };
