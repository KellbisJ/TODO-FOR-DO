import React from 'react';

function TodoList(props) {
	const renderFunc = props.children || props.render;
	return (
		<ul className="TodoList">
			{props.error && props.onError()}
			{props.loading && props.onLoading()}

			{!props.loading && !props.error && props.searchedTodos.length === 0 && props.totalTodos > 0 && props.onEmptyTodos()}

			{props.searchedTodos.map(renderFunc)}
		</ul>
	);
}

export { TodoList };
