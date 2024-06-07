import { useEffect, useRef, useState, MouseEvent } from 'react';
import styles from './Select.module.scss';
import React from 'react';

type OptionType = {
	value: string | number;
	text: string;
};

interface ISelectProps {
	label: string;
	disabled?: boolean;
	options: OptionType[];
	onChange?: (option: OptionType) => void;
	selected?: OptionType;
}

const Select = ({ label, disabled, options, onChange, selected }: ISelectProps) => {
	const [activeState, setActiveState] = useState(selected?.text ? true : false);
	const [selectedOption, setSelectedOption] = useState<OptionType>(
		selected
			? selected
			: {
					value: '',
					text: '',
				}
	);
	const [labelWidth, setLabelWidth] = useState(0);
	const labelRef = useRef<HTMLLabelElement>(null);
	const [showDropdown, setShowDropdown] = useState(false);

	useEffect(() => {
		setLabelWidth(labelRef.current ? labelRef.current.getBoundingClientRect().width + 4 : 0);
	}, [labelRef]);

	const labelClasses = [styles['label'], activeState ? styles['active'] : ''].join(' ');
	const containerClasses = [
		styles['container'],
		styles['outlined'],
		disabled ? styles['disabled'] : '',
	].join(' ');
	const arrowClasses = [
		styles['arrow'],
		showDropdown ? styles['arrowUp'] : styles['arrowDown'],
	].join(' ');

	const onChangeSelected = (option: OptionType) => {
		setSelectedOption((prev) => ({ ...prev, ...option }));
		if (onChange) {
			onChange(option);
		}
	};
	const handleOnFocus = () => {
		setActiveState(true);
	};
	const handleOnClick = () => {
		setShowDropdown((prev) => !prev);
	};

	const handleOnBlur = () => {
		setActiveState(Boolean(selectedOption.text));
		setShowDropdown(false);
	};

	const handleClickOption = (
		option: OptionType,
		event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>
	) => {
		event.stopPropagation();
		onChangeSelected(option);
		setShowDropdown(false);
	};

	return (
		<div
			className={containerClasses}
			onFocus={handleOnFocus}
			onBlur={handleOnBlur}
			onClick={handleOnClick}
			tabIndex={-1}
			data-testid='containerSelect'
		>
			<div className={styles['body']}>
				<label
					className={labelClasses}
					ref={labelRef}
					data-testid='label'
				>
					{label}
				</label>
				<p
					className={styles['selectedText']}
					data-testid='selectedText'
				>
					{selectedOption.text}
				</p>
				<button className={styles['arrowBtn']}>
					<span className={arrowClasses}></span>
				</button>
				<p
					className={`${activeState ? `${styles['coverActive']} ` : ''} ${styles['cover']}`}
					style={{ width: labelWidth }}
				/>
			</div>
			{showDropdown && (
				<ul
					className={styles.list}
					data-testid='list'
				>
					{options?.map((option) => (
						<li
							key={option.value}
							value={option.value}
							className={`${styles['item']} ${selectedOption.text === option.text ? styles['selected'] : ''}`}
							onClick={(e) => handleClickOption(option, e)}
							data-testid={option.value}
						>
							{option.text}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Select;
