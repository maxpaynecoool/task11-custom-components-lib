import React, { ChangeEvent, ReactNode } from 'react';
import styles from './TextField.module.scss';
import classNames from 'classnames/bind';

interface TextFieldProps {
	children: ReactNode | string;
	variant: 'outlined' | 'filled' | 'standart';
	label: string;
	className: string;
	type: string;
	error: boolean;
	disabled: boolean;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const cx = classNames.bind(styles);

const TextField = ({
	children,
	variant = 'standart',
	label,
	className,
	error,
	type,
	disabled,
	onChange,
	...props
}: Partial<TextFieldProps>) => {
	const inputStyle = cx('input', className, {
		outlined: variant === 'outlined',
		filled: variant === 'filled',
		error: error,
	});

	return (
		<div className={`${styles.containerInput}`}>
			<input
				className={inputStyle}
				placeholder=''
				disabled={disabled}
				onChange={onChange}
				type={type}
				{...props}
			></input>
			<label className={styles.label}>{label}</label>
			{children}
		</div>
	);
};

export default TextField;
