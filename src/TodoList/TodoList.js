import React from 'react';

function TodoList(props) {
	return (
		<ul className="TodoList">
			{props.error && props.onError()}
			{props.loading && props.onLoading()}

			{!props.loading && !props.error && props.searchedTodos.length === 0 && props.totalTodos > 0 && props.onEmptyTodos()}

			{props.searchedTodos.map(props.render)}

			{props.children}
		</ul>
	);
}

export { TodoList };
