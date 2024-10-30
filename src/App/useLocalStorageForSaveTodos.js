import React from 'react';

function useLocalStorageForSaveTodos(itemName, initialValue) {
	const [state, dispatch] = React.useReducer(reducer, initialState(initialValue));
	const { synchronizedItem, item, loading, error } = state;

	const isError = (error) => dispatch({ type: actionTypes.error, payload: error });
	const isSuccess = (item) => dispatch({ type: actionTypes.success, payload: item });
	const saveTodos = (item) => dispatch({ type: actionTypes.save, payload: item });
	const synchronizedItems = () => dispatch({ type: actionTypes.getSynchronizedItem });

	React.useEffect(() => {
		setTimeout(() => {
			try {
				const todoItem = localStorage.getItem(itemName);
				let parsedItemTodos = initialValue;

				if (todoItem) {
					parsedItemTodos = JSON.parse(todoItem);
				}
				isSuccess(parsedItemTodos);
			} catch (error) {
				isError(error);
				console.log(error);
			}
		}, 1700);
	}, [synchronizedItem]);

	const saveItemTodos = (newItem) => {
		try {
			const stringifiedTodos = JSON.stringify(newItem);
			localStorage.setItem(itemName, stringifiedTodos);
			saveTodos(newItem);
		} catch (error) {
			isError(error);
		}
	};

	const getSynchronizedItem = () => {
		synchronizedItems();
	};
	return {
		item,
		saveItemTodos,
		loading,
		error,
		getSynchronizedItem,
	};
}

const initialState = ({ initialValue }) => ({
	synchronizedItem: true,
	item: initialValue,
	loading: true,
	error: false,
});

const actionTypes = {
	error: 'ERROR',
	success: 'SUCCESS',
	save: 'SAVE',
	getSynchronizedItem: 'GET_SYNCHRONIZED_ITEM',
};
const reducerObject = (state, payload) => ({
	[actionTypes.error]: {
		...state,
		error: true,
	},
	[actionTypes.success]: {
		...state,
		error: false,
		loading: false,
		synchronizedItem: true,
		item: payload,
	},
	[actionTypes.save]: {
		...state,
		item: payload,
	},
	[actionTypes.getSynchronizedItem]: {
		...state,
		synchronizedItem: false,
		loading: true,
		item: payload,
	},
});

const reducer = (state, action) => {
	return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorageForSaveTodos };
