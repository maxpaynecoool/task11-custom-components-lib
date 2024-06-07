import React from 'react';
import styles from './Switch.module.scss';
import cnBind from 'classnames/bind';

interface SwitchProps {
	id: string;
	checked?: boolean;
	disabled?: boolean;
	onChange?: () => void;
}

const cx = cnBind.bind(styles);

const Switch = ({ id, checked, onChange, disabled }: SwitchProps) => {
	const inputStyles = cx('input', {
		disabled: disabled,
	});
	return (
		<div className={styles.container}>
			<input
				id={id}
				type='checkbox'
				checked={checked}
				onChange={onChange}
				className={inputStyles}
				disabled={disabled}
			/>
			<label
				htmlFor={id}
				className={styles.slider}
			></label>
		</div>
	);
};

export default Switch;
