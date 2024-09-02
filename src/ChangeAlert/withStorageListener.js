import React from 'react';

function withStorageListener(WrappedComponent) {
	return function WrappedComponentWithStorageListener(props) {
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
			props.SynchronizedTodos();
			setStorageChange(false);
		};

		return <WrappedComponent show={storageChange} toggleShow={toggleShow} />;
	};
}

export { withStorageListener };
