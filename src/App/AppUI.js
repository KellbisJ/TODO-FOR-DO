import React from 'react';
import { TodoForDo } from '../TodoForDo/TodoForDo';
import { TodoSystem } from '../TodoSystem/TodoSystem';
import { TodoInfoAndSearch } from '../TodoInfoAndSearch/TodoInfoAndSearch';
import { NumbersTodo } from '../TodoInfoAndSearch/NumbersTodo';
import { DarkOrLightMode } from '../DarkOrLightMode/DarkOrLightMode';
import { TodoSearch } from '../TodoInfoAndSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoList/TodoItem';
import { CreateTodoBtn } from '../CreateTodoBtn/CreateTodoBtn';
import { TodosLoading } from '../TodoList/TodosLoading';
import { TodosErrors } from '../TodoList/TodosError';
import { EmptyTodos } from '../TodoList/EmptyTodos';

function AppUI({
	loading,
	error,
	completedTodos,
	totalTodos,
	lightMode,
	searchValue,
	setSearchValue,
	handleLightMode,
	searchedTodos,
	todoUncheck,
	todoDone,
	todoDelete,
}) {
	return (
		<>
			<TodoForDo lightMode={lightMode} />

			<TodoSystem lightMode={lightMode}>
				<TodoInfoAndSearch>
					<NumbersTodo completed={completedTodos} total={totalTodos} lightMode={lightMode} loading={loading} />
					<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} lightMode={lightMode} />
				</TodoInfoAndSearch>

				<DarkOrLightMode lightMode={lightMode} handleLightMode={handleLightMode} />
				<TodoList lightMode={lightMode}>
					{loading && <TodosLoading TodosLoading={loading} lightMode={lightMode} />} {/* Si loading es true, se muestra el componente TodosLoading */}
					{error && <TodosErrors />} {/* Si error es true, se muestra el componente TodosErrors */}
					{!loading && !error && searchedTodos.length === 0 && <EmptyTodos />}{' '}
					{/* Si loading y error son false y searchedTodos es un array vacío, se muestra el componente EmptyTodos */}
					{searchedTodos.map((todo) => (
						<TodoItem
							key={todo.text}
							text={todo.text}
							completed={todo.completed}
							onComplete={() => {
								if (todo.completed === true) {
									todoUncheck(todo.text);
								} else {
									todoDone(todo.text);
								}
							}}
							onDelete={() => {
								todoDelete(todo.text);
							}}
							lightMode={lightMode}
						/>
					))}
				</TodoList>
				<CreateTodoBtn />
			</TodoSystem>
		</>
	);
}

export { AppUI };
