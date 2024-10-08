import React from 'react';
import { useTodos } from './useTodos';
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
import { Modal } from '../Modal';
import { AddTodoForm } from '../AddTodoForm/AddTodoForm';
import { ChangeAlert } from '../ChangeAlert/index';

function App() {
	const {
		loading,
		setLoading,
		error,
		lightMode,
		handleLightMode,
		searchedTodos,
		todoUncheck,
		todoDone,
		todoDelete,
		openModal,
		totalTodos,
		completedTodos,
		searchValue,
		setSearchValue,
		setOpenModal,
		addTodo,
		SynchronizedTodos,
	} = useTodos();
	return (
		<>
			<TodoForDo lightMode={lightMode} />

			<TodoSystem lightMode={lightMode}>
				<TodoInfoAndSearch>
					<NumbersTodo totalTodos={totalTodos} completedTodos={completedTodos} lightMode={lightMode} loading={loading} />
					<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} lightMode={lightMode} />
				</TodoInfoAndSearch>

				<DarkOrLightMode lightMode={lightMode} handleLightMode={handleLightMode} />

				<TodoList
					lightMode={lightMode}
					error={error}
					loading={loading}
					searchedTodos={searchedTodos}
					totalTodos={totalTodos}
					onError={() => <TodosErrors />}
					onLoading={() => <TodosLoading TodosLoading={loading} lightMode={lightMode} />}
					onEmptyTodos={() => <EmptyTodos lightMode={lightMode} />}
					// render={(todo) => (
					// 	<TodoItem
					// 		key={todo.text}
					// 		text={todo.text}
					// 		completed={todo.completed}
					// 		onComplete={() => {
					// 			if (todo.completed === true) {
					// 				todoUncheck(todo.text);
					// 			} else {
					// 				todoDone(todo.text);
					// 			}
					// 		}}
					// 		onDelete={() => {
					// 			todoDelete(todo.text);
					// 		}}
					// 		lightMode={lightMode}
					// 	/>
					// )}
				>
					{(todo) => (
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
					)}
				</TodoList>

				<CreateTodoBtn openModal={openModal} setOpenModal={setOpenModal} totalTodos={totalTodos} loading={loading} />
				{openModal && (
					<Modal>
						<AddTodoForm setOpenModal={setOpenModal} addTodo={addTodo} lightMode={lightMode} />
					</Modal>
				)}
				<ChangeAlert SynchronizedTodos={SynchronizedTodos} loading={loading} setLoading={setLoading} />
			</TodoSystem>
		</>
	);
}

export default App;
