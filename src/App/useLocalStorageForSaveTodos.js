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
				console.log(error);
			}
		}, 1700);
	}, []);

	const saveItemTodos = (newItem) => {
		const stringifiedTodos = JSON.stringify(newItem);
		localStorage.setItem(itemName, stringifiedTodos);

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
