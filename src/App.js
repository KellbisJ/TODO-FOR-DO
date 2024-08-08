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

// const defaultTodos = [
// 	{ text: 'Organizar el cuarto', completed: false },
// 	{ text: 'Estudiar programacion', completed: true },
// 	{ text: 'Estudiar ingles', completed: false },
// 	{ text: 'Hackear la nasa', completed: true },
// ];

// localStorage.removeItem('TODOS_FOR_DO1');

function useLocalStorage(itemName, initialValue) {
	const todoItem = localStorage.getItem(itemName);
	const stringifiedTodos = JSON.stringify(todoItem) || initialValue;
	const parsedItemTodos = JSON.parse(todoItem) || initialValue;
	const setItemTodo = () => localStorage.setItem(itemName, stringifiedTodos);

	if (!todoItem) {
		setItemTodo(parsedItemTodos);
	}

	const [item, setItem] = React.useState(parsedItemTodos);

	const saveItemTodos = (newItem) => {
		const stringifiedTodos2 = JSON.stringify(newItem);
		localStorage.setItem(itemName, stringifiedTodos2);

		setItem(newItem);
	};
	return [item, saveItemTodos];
}

function App() {
	const [todos, saveTodos] = useLocalStorage('TODOS_FOR_DO1', []);
	const [searchValue, setSearchValue] = React.useState('');

	const saveThemeInLocalStorage = (lightMode) => localStorage.setItem('LIGHT_MODE', lightMode);
	const getThemeFromLocalStorage = () => localStorage.getItem('LIGHT_MODE') === 'true' || false;

	const [lightMode, setLightMode] = React.useState(getThemeFromLocalStorage);

	const completedTodos = todos ? todos.filter((todo) => !!todo.completed).length : 0;

	const totalTodos = todos ? todos.length : 0;

	const searchedTodos = Array.isArray(todos)
		? todos.filter((todo) => {
				const todoText = todo.text.toLowerCase();
				const searchText = searchValue.toLowerCase();
				return todoText.includes(searchText);
		  })
		: [];

	const todoDone = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.text === text);
		newTodos[todoIndex].completed = true;
		saveTodos(newTodos);
	};

	const todoUncheck = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.text === text);
		newTodos[todoIndex].completed = false;
		saveTodos(newTodos);
	};
	const todoDelete = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.text === text);
		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos);
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
