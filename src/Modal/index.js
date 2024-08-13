import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }) {
	return ReactDOM.createPortal(<div className="todoModalBackground">{children}</div>, document.getElementById('todoModal'));
}
export { Modal };
