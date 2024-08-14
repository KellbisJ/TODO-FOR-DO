function TodoItem({ text, completed, onComplete, onDelete, lightMode }) {
	return (
		<li className={`TodoItem ${completed ? 'TodoItemComplete' : ''} ${lightMode ? 'TodoItemLight' : ''}`}>
			<input
				type="checkbox"
				className="todoSuccess"
				checked={completed}
				onChange={() => {
					onComplete(text);
				}}></input>
			<p className={`todoText ${lightMode ? 'todoTextLight' : ''} `}>{text}</p>
			<span className="todoConclude" onClick={() => onDelete(text)}>
				x
			</span>
		</li>
	);
}

export { TodoItem };
