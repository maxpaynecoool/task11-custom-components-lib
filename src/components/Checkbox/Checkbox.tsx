import React from 'react';
import styles from './Checkbox.module.scss';
import cnBind from 'classnames/bind';

interface CheckboxProps {
	label?: string;
	disabled?: boolean;
	checked?: boolean;
	onChange: () => void;
	size?: 'small' | 'medium' | 'large';
}

const cx = cnBind.bind(styles);

const Checkbox = ({ label, checked, disabled, size = 'small', onChange }: CheckboxProps) => {
	const checkboxStyle = cx('input', {
		small: size === 'small',
		medium: size === 'medium',
		large: size === 'large',
	});

	const labelStyles = cx('label', {
		disabled: disabled,
		small: size === 'small',
		medium: size === 'medium',
		large: size === 'large',
	});

	return (
		<div className={styles.container}>
			<label className={labelStyles}>
				<input
					className={checkboxStyle}
					type='checkbox'
					checked={checked}
					onChange={onChange}
					disabled={disabled}
				/>
				{label}
			</label>
		</div>
	);
};

export default Checkbox;
