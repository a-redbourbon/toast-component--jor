import React from 'react';
import styles from './ToastPlayground.module.css';
import Header from '../Header';
import Controls from '../Controls';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

export const toastListContext = React.createContext();

function ToastPlayground() {
	const [toastList, setToastList] = React.useState([]);

	return (
		<div className={styles.wrapper}>
			<Header />
			<ToastShelf toastList={toastList} setToastList={setToastList} />
			<Controls
				options={VARIANT_OPTIONS}
				toastList={toastList}
				setToastList={setToastList}
			/>
		</div>
	);
}

export default ToastPlayground;
