import React from 'react';

import Button from '../Button';

import styles from './Controls.module.css';

import { toastListContext } from '../ToastListProvider';

function Controls({ options, toastList, setToastList }) {
	const [message, setMessage] = React.useState('');
	const [variant, setVariant] = React.useState('notice');
	const { createToast } = React.useContext(toastListContext);

	function handleSubmit(event) {
		event.preventDefault();
		createToast(message, variant);
		setMessage('');
		setVariant(options[0]);
	}

	return (
		<div className={styles.controlsWrapper}>
			<form
				onSubmit={(event) => {
					handleSubmit(event);
				}}
			>
				<div className={styles.row}>
					<label
						htmlFor='message'
						className={styles.label}
						style={{ alignSelf: 'baseline' }}
					>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id='message'
							className={styles.messageInput}
							value={message}
							required={true}
							onChange={(event) => {
								setMessage(event.target.value);
							}}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div
						className={`${styles.inputWrapper} ${styles.radioWrapper}`}
					>
						{options.map((option, index) => {
							return (
								<div className={styles.radioWrapper} key={index}>
									<input
										id={`variant-${option}`}
										type='radio'
										name='variant'
										value={option}
										checked={variant === option}
										required={true}
										onChange={(event) => {
											setVariant(event.target.value);
										}}
									/>
									<label htmlFor={`variant-${option}`}>
										{option}
									</label>
								</div>
							);
						})}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div
						className={`${styles.inputWrapper} ${styles.radioWrapper}`}
					>
						<Button>Pop Toast!</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Controls;
