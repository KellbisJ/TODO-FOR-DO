import React from 'react';
// import { TodoProvider } from '../TodoContext';
// import { AppUI } from './AppUI';

function App() {
	const [state, setState] = React.useState('ratatat');
	return (
		<React.Fragment>
			<TodoForDo props={'To do - For do'} />
			<TodoSystem state={state} />
		</React.Fragment>
	);
}
function TodoForDo({ props }) {
	return (
		<React.Fragment>
			<h2>{props}</h2>
		</React.Fragment>
	);
}
function TodoSystem({ state }) {
	return (
		<React.Fragment>
			<TodoInfoAndSearch>
				<NumbersTodo />
				<TodoSearch />
			</TodoInfoAndSearch>
			<TodoList>
				<TodoItem state={state} />
			</TodoList>
		</React.Fragment>
	);
}

function TodoInfoAndSearch({ children }) {
	return <div>{children}</div>;
}

function NumbersTodo() {
	return (
		<React.Fragment>
			<p>NumbersTodo</p>
		</React.Fragment>
	);
}

function TodoSearch() {
	return (
		<React.Fragment>
			<p>TodoSearch</p>:
		</React.Fragment>
	);
}

function TodoList({ children }) {
	return <ul className="TodoList"> {children}</ul>;
}

function TodoItem({ state }) {
	return <p>Todoitemrch: {state}</p>;
}

// function App() {
// 	return (
// 		<TodoProvider>
// 			<AppUI />
// 		</TodoProvider>
// 	);
// }

export default App;
