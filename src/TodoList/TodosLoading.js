import React from 'react';

function TodosLoading({ TodosLoading, lightMode }) {
	return (
		<>
			<li className={`TodoItem ${TodosLoading ? 'TodoItemLoading' : ''} ${lightMode ? 'TodoItemLight' : ''}`}>
				<span className={`${TodosLoading ? 'todoSuccessLoading' : ''} ${lightMode ? 'todoSuccessLoadingLight' : ''}`}></span>
				<span className={`${TodosLoading ? 'todoConcludeLoading' : ''} ${lightMode ? 'todoConcludeLoadingLight' : ''}`}></span>
			</li>
			<li className={`TodoItem ${TodosLoading ? 'TodoItemLoading' : ''} ${lightMode ? 'TodoItemLight' : ''}`}>
				<span className={`${TodosLoading ? 'todoSuccessLoading' : ''} ${lightMode ? 'todoSuccessLoadingLight' : ''}`}></span>
				<span className={`${TodosLoading ? 'todoConcludeLoading' : ''} ${lightMode ? 'todoConcludeLoadingLight' : ''}`}></span>
			</li>
			<li className={`TodoItem ${TodosLoading ? 'TodoItemLoading' : ''} ${lightMode ? 'TodoItemLight' : ''}`}>
				<span className={`${TodosLoading ? 'todoSuccessLoading' : ''} ${lightMode ? 'todoSuccessLoadingLight' : ''}`}></span>
				<span className={`${TodosLoading ? 'todoConcludeLoading' : ''} ${lightMode ? 'todoConcludeLoadingLight' : ''}`}></span>
			</li>
		</>
	);
}

export { TodosLoading };
