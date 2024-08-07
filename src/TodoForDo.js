function TodoForDo({ lightMode }) {
	return <h1 className={`TodoForDoDark ${lightMode ? 'TodoForDoLight' : ''}`}>To do \-/ For do</h1>;
}

export { TodoForDo };
