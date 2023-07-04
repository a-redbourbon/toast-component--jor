import React from 'react';
import styles from './ToastPlayground.module.css';
import Header from '../Header';
import Controls from '../Controls';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<ToastShelf />
			<Controls options={VARIANT_OPTIONS} />
		</div>
	);
}

export default ToastPlayground;
