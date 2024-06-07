import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
	variant?: 'text' | 'contained' | 'outlined';
	disabled?: boolean;
	onClick?: () => void;
	size?: 'small' | 'medium' | 'large';
	children?: React.ReactNode;
}

const Button = ({
	variant = 'contained',
	disabled = false,
	onClick,
	size = 'medium',
	children,
	...props
}: ButtonProps) => {
	const classStyles = [styles['button'], styles[variant], styles[size]];

	return (
		<button
			className={classStyles.join(' ')}
			disabled={disabled}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
