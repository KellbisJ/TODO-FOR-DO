function TodoItem(props) {
	return (
		<li className="TodoItem">
			<span className="todoSuccess" onClick={() => props.onComplete(props.text)}>
				✅
			</span>
			<p className={`todoText ${props.completed && 'completed'} `}>{props.text}</p>
			<span className="todoConclude" onClick={() => props.onDelete(props.text)}>
				❌
			</span>
		</li>
	);
}
// function deleteTodo() {
// 	document.querySelector('.TodoItem').remove();
// }
export { TodoItem };
