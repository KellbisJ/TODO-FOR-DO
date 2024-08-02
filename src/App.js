import React from 'react';
import { TodoForDo } from './TodoForDo';
import { TodoSystem } from './TodoSystem';
import { TodoInfoAndSearch } from './TodoInfoAndSearch';
import { NumbersTodo } from './NumbersTodo';
import { DarkOrLightMode } from './DarkOrLightMode';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoBtn } from './CreateTodoBtn';

const defaultTodos = [
	{ text: 'Cortar cebolla', completed: false },
	{ text: 'Algo', completed: true },
	{ text: 'Otra cosa', completed: false },
];
// Ahora quiero crear un componente que sea TodoInfoAndSearch para que contenga al NumbersTodo por y al TodoSearch, y que este componente se encuentre dentro del TodoSystem
function App() {
	return (
		<>
			<TodoForDo />

			<TodoSystem>
				<TodoInfoAndSearch>
					<NumbersTodo completed={16} total={25} />
					<TodoSearch />
				</TodoInfoAndSearch>

				<DarkOrLightMode />
				<TodoList>
					{defaultTodos.map((todo) => (
						<TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
					))}
				</TodoList>

				<CreateTodoBtn />
			</TodoSystem>
		</>
	);
}

export default App;
