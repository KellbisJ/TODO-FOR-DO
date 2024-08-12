function TodoItem({ text, completed, onComplete, onDelete, lightMode }) {
	return (
		<li className={`TodoItem ${lightMode ? 'TodoItemLight' : ''}`}>
			<span className="todoSuccess" onClick={() => onComplete(text)}>
				✅
			</span>
			<p className={`todoText ${completed && 'completed'} ${lightMode ? 'todoTextLight' : ''} `}>{text}</p>
			<span className="todoConclude" onClick={() => onDelete(text)}>
				❌
			</span>
		</li>
	);
}

export { TodoItem };
