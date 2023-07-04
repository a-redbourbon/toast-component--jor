import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastList, setToastList }) {
	function handleDismiss(id) {
		const nextToastList = toastList.filter((toastItem) => {
			return toastItem.id !== id;
		});
		setToastList(nextToastList);
	}

	return (
		<ol className={styles.wrapper}>
			{toastList.map((toastItem, index) => {
				return (
					<li className={styles.toastWrapper} key={toastItem.id}>
						<Toast
							variant={toastItem.variant}
							id={toastItem.id}
							handleDismiss={handleDismiss}
						>
							{toastItem.message}
						</Toast>
					</li>
				);
			})}
		</ol>
	);
}

export default ToastShelf;
