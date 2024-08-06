import React from 'react';
function TodoSearch({ searchValue, setSearchValue }) {
	return (
		<input
			className="TodoSearch"
			placeholder="Study"
			value={searchValue}
			onChange={(e) => {
				setSearchValue(e.target.value);
			}}></input>
	);
}

export { TodoSearch };
