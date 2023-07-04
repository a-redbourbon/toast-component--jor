import React from 'react';

import Button from '../Button';

import styles from './Controls.module.css';

function Controls({ options, toastList, setToastList }) {
	const [message, setMessage] = React.useState('');
	const [variant, setVariant] = React.useState('notice');

	function handleSubmit() {
		const newToast = {
			message,
			variant,
			id: crypto.randomUUID(),
		};
		const nextToastList = [...toastList, newToast];
		setToastList(nextToastList);
		setMessage('');
		setVariant('notice');
	}

	return (
		<div className={styles.controlsWrapper}>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					handleSubmit();
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
