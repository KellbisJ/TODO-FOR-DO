import React from 'react';

function useLocalStorageForSaveTodos(itemName, initialValue) {
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

export { useLocalStorageForSaveTodos };
