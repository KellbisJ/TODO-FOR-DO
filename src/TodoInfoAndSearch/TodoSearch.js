import React from 'react';
import { TodoContext } from '../TodoContext/index';

function TodoSearch() {
	const { searchValue, setSearchValue, lightMode } = React.useContext(TodoContext);
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
