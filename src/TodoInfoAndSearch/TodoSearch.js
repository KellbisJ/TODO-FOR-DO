import React from 'react';
function TodoSearch({ searchValue, setSearchValue, lightMode }) {
	return (
		<input
			className={`TodoSearch ${lightMode ? 'TodoSearchLight' : ''}`}
			placeholder="Study"
			value={searchValue}
			onChange={(e) => {
				setSearchValue(e.target.value);
			}}></input>
	);
}

export { TodoSearch };
