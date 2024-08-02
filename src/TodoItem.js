function TodoItem(props) {
	return (
		<li className="TodoItem">
			<span className="todoSucess">✅</span>
			<p>{props.text}</p>
			<span className="todoConclude">❌</span>
		</li>
	);
}
export { TodoItem };
