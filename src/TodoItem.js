function TodoItem(props) {
	return (
		<li className="TodoItem">
			<span className="todoSuccess">✅</span>
			<p className={`todoText ${props.completed && 'completed'} `}>{props.text}</p>
			<span className="todoConclude">❌</span>
		</li>
	);
}
export { TodoItem };
