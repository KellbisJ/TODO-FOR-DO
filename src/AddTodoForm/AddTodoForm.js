import React from 'react';
import { TodoContext } from '../TodoContext/index';
import { faL } from '@fortawesome/free-solid-svg-icons';

function AddTodoForm() {
	const { lightMode, setOpenModal, addTodo } = React.useContext(TodoContext);
	const [newTodosValue, setNewTodosValue] = React.useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		if (newTodosValue.length > 0 && newTodosValue.length < 201) {
			addTodo(newTodosValue);
			setNewTodosValue('');
			setOpenModal(false);
		}
	};

	const onChange = (e) => {
		setNewTodosValue(e.target.value);
	};
	const onSubmit2 = (e) => {
		if (e.key === 'Enter' && newTodosValue.length > 0 && newTodosValue.length < 201) {
			e.preventDefault();
			addTodo(newTodosValue);
			setNewTodosValue('');
			setOpenModal(false);
		}
	};

	return (
		<form className={`CreateTodoForm ${lightMode ? 'CreateTodoFormLight' : ''}`} onSubmit={onSubmit} onKeyDown={onSubmit2}>
			<p className={`textCreateTodo ${lightMode ? 'textCreateTodoLight' : ''}`}>📝 Create a new task</p>
			<button className="closeModal" onClick={() => setOpenModal(false)}>
				x
			</button>
			<input className="inputCreateTodo" type="text" placeholder="Something for do" value={newTodosValue} onChange={onChange}></input>
			<button className="buttonCreateTodo" type="submit">
				Agregar
			</button>
			{/* <span className="textRulesTodo">
				Hay un limite de 40 caracteres, sin tu nuevo TODO coincide con uno ya existente no se agregará, y si se envia un valor vacio tampoco se
				agregará
			</span> */}
		</form>
	);
}

export { AddTodoForm };
