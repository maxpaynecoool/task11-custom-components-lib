import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Switch from './Switch';

describe('Switch', () => {
	it('should be rendered with the default props', () => {
		const { getByRole } = render(<Switch id='mySwitch' />);
		const switchElement = getByRole('checkbox');

		expect(switchElement).toBeInTheDocument();
	});

	it('is checking the change event', () => {
		const onChangeMock = jest.fn();
		const { getByRole } = render(
			<Switch
				id='mySwitch'
				onChange={onChangeMock}
			/>
		);
		const switchElement = getByRole('checkbox');

		fireEvent.click(switchElement);

		expect(onChangeMock).toHaveBeenCalled();
		expect(switchElement).toBeChecked();
	});

	it('should be rendered with disabled prop', () => {
		const { getByRole } = render(
			<Switch
				id='mySwitch'
				disabled={true}
			/>
		);
		const switchElement = getByRole('checkbox');

		expect(switchElement).toBeDisabled();
	});
});
