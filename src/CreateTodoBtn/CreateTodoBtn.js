import React from 'react';

function CreateTodoBtn({ openModal, setOpenModal, totalTodos }) {
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
