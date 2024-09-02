import React from 'react';

function useStorageListener(SynchronizedTodos) {
	const [storageChange, setStorageChange] = React.useState(false);

	React.useEffect(() => {
		const handleStorageChange = (change) => {
			if (change.key === 'TODOS_FOR_DO1') {
				setStorageChange(true);
			}
		};

		window.addEventListener('storage', handleStorageChange);

		return () => {
			window.removeEventListener('storage', handleStorageChange);
		};
	}, []);

	const toggleShow = () => {
		SynchronizedTodos();
		setStorageChange(false);
	};

	return {
		show: storageChange,
		toggleShow,
	};
}

export { useStorageListener };
