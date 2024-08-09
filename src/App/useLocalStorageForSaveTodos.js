import React from 'react';

function useLocalStorageForSaveTodos(itemName, initialValue) {
	const [item, setItem] = React.useState(initialValue);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(false);

	React.useEffect(() => {
		setTimeout(() => {
			try {
				const todoItem = localStorage.getItem(itemName);
				let parsedItemTodos = initialValue;

				if (todoItem) {
					parsedItemTodos = JSON.parse(todoItem);
				}

				setItem(parsedItemTodos);
				setLoading(false);
			} catch (error) {
				setLoading(false);
				setError(true);
			}
		}, 500);
	}, []);

	const saveItemTodos = (newItem) => {
		const stringifiedTodos2 = JSON.stringify(newItem);
		localStorage.setItem(itemName, stringifiedTodos2);

		setItem(newItem);
	};
	return {
		item,
		saveItemTodos,
		loading,
		error,
	};
}

export { useLocalStorageForSaveTodos };
