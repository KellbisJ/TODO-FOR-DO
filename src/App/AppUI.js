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

function AppUI({
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
					<NumbersTodo completed={completedTodos} total={totalTodos} lightMode={lightMode} />
					<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} lightMode={lightMode} />
				</TodoInfoAndSearch>

				<DarkOrLightMode lightMode={lightMode} handleLightMode={handleLightMode} />
				<TodoList lightMode={lightMode}>
					{searchedTodos.map((todo) => (
						<TodoItem
							key={todo.text}
							text={todo.text}
							completed={todo.completed}
							onComplete={() => {
								// falta logica de que al hacer click nuevamente se desmarque el texto y sea un no completado
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
