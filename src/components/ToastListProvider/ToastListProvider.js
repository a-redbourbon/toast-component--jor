import React from 'react';
import useEscapeKey from '../../hooks/use-escape-key';

export const toastListContext = React.createContext();

function ToastListProvider({ children }) {
	const [toastList, setToastList] = React.useState([]);

	function deleteToast(id) {
		const nextToastList = toastList.filter((toastItem) => {
			return toastItem.id !== id;
		});
		setToastList(nextToastList);
	}

	function createToast(message, variant) {
		const newToast = {
			message,
			variant,
			id: crypto.randomUUID(),
		};
		const nextToastList = [...toastList, newToast];
		setToastList(nextToastList);
	}

	function clearToasts() {
		setToastList([]);
	}

	useEscapeKey(clearToasts);

	return (
		<toastListContext.Provider
			value={{ toastList, deleteToast, createToast, clearToasts }}
		>
			{children}
		</toastListContext.Provider>
	);
}

export default ToastListProvider;
