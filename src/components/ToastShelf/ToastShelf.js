import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { toastListContext } from '../ToastListProvider/ToastListProvider';

function ToastShelf() {
	const { toastList } = React.useContext(toastListContext);

	return (
		<ol
			className={styles.wrapper}
			role='region'
			aria-live='polite'
			aria-label='Notification'
		>
			{toastList.map((toastItem, index) => {
				return (
					<li className={styles.toastWrapper} key={toastItem.id}>
						<Toast variant={toastItem.variant} id={toastItem.id}>
							{toastItem.message}
						</Toast>
					</li>
				);
			})}
		</ol>
	);
}

export default ToastShelf;
