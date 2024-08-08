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

// localStorage.removeItem('TODOS_FOR_DO1');

function App() {
	const localStorageTodos = localStorage.getItem('TODOS_FOR_DO1');
	const stringifiedTodos = JSON.stringify(defaultTodos) || [];
	const setTodosInLocalStorage = () => localStorage.setItem('TODOS_FOR_DO1', stringifiedTodos);

	if (!localStorageTodos) {
		setTodosInLocalStorage();
	}

	const parsedTodos = JSON.parse(localStorageTodos) || [];

	const saveThemeInLocalStorage = (lightMode) => localStorage.setItem('LIGHT_MODE', lightMode);
	const getThemeFromLocalStorage = () => localStorage.getItem('LIGHT_MODE') === 'true' || false;

	const [todos, setTodos] = React.useState(parsedTodos);
	const [searchValue, setSearchValue] = React.useState('');
	const [lightMode, setLightMode] = React.useState(getThemeFromLocalStorage);

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
		saveTodosInLocalStorage(newTodos);
	};
	const saveTodosInLocalStorage = (newTodos) => {
		const stringifiedTodos2 = JSON.stringify(newTodos);
		localStorage.setItem('TODOS_FOR_DO1', stringifiedTodos2);

		setTodos(newTodos);
	};
	const todoUncheck = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.text === text);
		newTodos[todoIndex].completed = false;
		saveTodosInLocalStorage(newTodos);
	};
	const todoDelete = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.text === text);
		newTodos.splice(todoIndex, 1);
		saveTodosInLocalStorage(newTodos);
	};
	const handleLightMode = (newLightMode) => {
		saveThemeInLocalStorage(newLightMode);
		setLightMode(newLightMode);
	};

	console.log('Los usuarios buscan todos: ' + searchValue);
	// console.log('cambiamos a de modo de color ' + lightMode);
	return (
		<>
			<TodoForDo lightMode={lightMode} />

			<TodoSystem lightMode={lightMode}>
				<TodoInfoAndSearch>
					<NumbersTodo completed={completedTodos} total={totalTodos} lightMode={lightMode} />
					<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} lightMode={lightMode} />
				</TodoInfoAndSearch>

				<DarkOrLightMode lightMode={lightMode} handleLightMode={handleLightMode} />
				<TodoList lightMode={lightMode}>
					{searchedTodos.map((todo) => (
						<TodoItem
							key={todo.text}
							text={todo.text}
							completed={todo.completed}
							onComplete={() => {
								// falta logica de que al hacer click nuevamente se desmarque el texto y sea un no completado
								if (todo.completed === true) {
									todoUncheck(todo.text);
								} else {
									todoDone(todo.text);
								}
							}}
							onDelete={() => {
								todoDelete(todo.text);
							}}
							lightMode={lightMode}
						/>
					))}
				</TodoList>

				<CreateTodoBtn lightMode={lightMode} />
			</TodoSystem>
		</>
	);
}

export default App;
