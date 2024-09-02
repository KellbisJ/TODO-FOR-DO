import React from 'react';

function useLocalStorageForSaveTodos(itemName, initialValue) {
	const [SynchronizedItem, setSynchronizedItem] = React.useState(true);
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
	}, [SynchronizedItem]);

	const saveItemTodos = (newItem) => {
		const stringifiedTodos = JSON.stringify(newItem);
		localStorage.setItem(itemName, stringifiedTodos);

		setItem(newItem);
		setSynchronizedItem(true);
	};

	const getSynchronizedItem = () => {
		setLoading(true);
		setSynchronizedItem(false);
		// setSynchronizedItem(true);
	};
	return {
		item,
		saveItemTodos,
		loading,
		error,
		getSynchronizedItem,
	};
}

// Temas a solucionar:
// - Despues de actualizar y aplicar los cambios mas de una vez se queda cargando y no avanza ni muestra lo actualizado.
// - Recordar que tengo que leer mi codigo detalladamente para comprenderlo e incluso pedir ayuda a la IA, repasar conceptos como useState, useEffect, localStorage, render props, render functions, HOF, HOC etc.

export { useLocalStorageForSaveTodos };
