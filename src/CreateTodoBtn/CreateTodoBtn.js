import React from 'react';

function CreateTodoBtn({ openModal, setOpenModal, totalTodos, loading }) {
	return (
		<button
			className={`AddTodo ${totalTodos === 0 ? 'buttonCreateTodoTransition' : ''}`}
			onClick={(e) => {
				e.preventDefault();
				setOpenModal(!openModal);
				loading && setOpenModal(false);
			}}>
			+
		</button>
	);
}
export { CreateTodoBtn };
