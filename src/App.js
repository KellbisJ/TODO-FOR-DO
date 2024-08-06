import React from 'react';
import { TodoForDo } from './TodoForDo';
import { TodoSystem } from './TodoSystem';
import { TodoInfoAndSearch } from './TodoInfoAndSearch';
import { NumbersTodo } from './NumbersTodo';
import { DarkOrLightMode } from './DarkOrLightMode';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoBtn } from './CreateTodoBtn';

const defaultTodos = [
	{ text: 'Organizar el cuarto', completed: false },
	{ text: 'Estudiar programacion', completed: true },
	{ text: 'Estudiar ingles', completed: false },
	{ text: 'Hackear la nasa', completed: true },
];

function App() {
	const [todos, setTodos] = React.useState(defaultTodos);
	const [searchValue, setSearchValue] = React.useState('');
	const [lightMode, setLightMode] = React.useState(false);

	const completedTodos = todos.filter((todo) => !!todo.completed).length;
	const totalTodos = todos.length;

	const searchedTodos = todos.filter((todo) => {
		const todoText = todo.text.toLowerCase();
		const searchText = searchValue.toLowerCase();
		return todoText.includes(searchText);
	});

	const todoDone = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.text === text);
		newTodos[todoIndex].completed = true;
		setTodos(newTodos);
	};
	const todoDelete = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.text === text);
		newTodos.splice(todoIndex, 1);
		setTodos(newTodos);
	};

	console.log('Los usuarios buscan todos: ' + searchValue);
	// console.log('cambiamos a de modo de color ' + lightMode);
	return (
		<>
			<TodoForDo />

			<TodoSystem>
				<TodoInfoAndSearch>
					<NumbersTodo completed={completedTodos} total={totalTodos} />
					<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
				</TodoInfoAndSearch>

				<DarkOrLightMode lightMode={lightMode} setLightMode={setLightMode} />
				<TodoList>
					{searchedTodos.map((todo) => (
						<TodoItem
							key={todo.text}
							text={todo.text}
							completed={todo.completed}
							onComplete={() => {
								todoDone(todo.text); // falta logica de que al hacer click nuevamente se desmarque el texto y sea un no completado
							}}
							onDelete={() => {
								todoDelete(todo.text);
							}}
						/>
					))}
				</TodoList>

				<CreateTodoBtn />
			</TodoSystem>
		</>
	);
}

export default App;
