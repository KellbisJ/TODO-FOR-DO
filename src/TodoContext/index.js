import React from 'react';
import { useLocalStorageForSaveTodos } from './useLocalStorageForSaveTodos';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
	const { item: todos, saveItemTodos: saveTodos, loading, error } = useLocalStorageForSaveTodos('TODOS_FOR_DO1', []);
	const [searchValue, setSearchValue] = React.useState('');
	const [openModal, setOpenModal] = React.useState(false);

	const saveThemeInLocalStorage = (lightMode) => localStorage.setItem('LIGHT_MODE', lightMode); // Logica del tema claro y oscuro
	const getThemeFromLocalStorage = () => localStorage.getItem('LIGHT_MODE') === 'true' || false;

	const [lightMode, setLightMode] = React.useState(getThemeFromLocalStorage);

	const addTodo = (text) => {
		todos.some((todo) => todo.text === text) ? console.warn('Esta tarea ya existe') : saveTodos([...todos, { text, completed: false }]);
	};

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
	return (
		<TodoContext.Provider
			value={{
				loading,
				error,
				completedTodos,
				totalTodos,
				lightMode,
				searchValue,
				setSearchValue,
				handleLightMode,
				searchedTodos,
				todoUncheck,
				todoDone,
				todoDelete,
				openModal,
				setOpenModal,
				addTodo,
			}}>
			{children}
		</TodoContext.Provider>
	);
}

export { TodoContext, TodoProvider };

// const defaultTodos = [
// 	{ text: 'Organizar el cuarto', completed: false },
// 	{ text: 'Estudiar programacion', completed: true },
// 	{ text: 'Estudiar ingles', completed: false },
// 	{ text: 'Hackear la nasa', completed: true },
// ];

// localStorage.removeItem('TODOS_FOR_DO1');
