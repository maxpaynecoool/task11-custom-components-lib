import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
	it('should be rendered with default props', () => {
		const onChangeMock = jest.fn();
		const { getByLabelText } = render(
			<Checkbox
				label='label'
				onChange={onChangeMock}
			/>
		);
		const checkboxElement = getByLabelText('label');

		expect(checkboxElement).toBeInTheDocument();
	});

	it('should be checked', () => {
		const onChangeMock = jest.fn();
		const { getByLabelText } = render(
			<Checkbox
				label='label'
				onChange={onChangeMock}
				checked={true}
			/>
		);
		const checkboxElement = getByLabelText('label');

		expect(checkboxElement).toBeChecked();

		fireEvent.click(checkboxElement);

		expect(onChangeMock).toHaveBeenCalled();
	});

	it('should be disabled', () => {
		const onChangeMock = jest.fn();
		const { getByLabelText } = render(
			<Checkbox
				label='label'
				disabled={true}
				onChange={onChangeMock}
			/>
		);
		const checkboxElement = getByLabelText('label');

		expect(checkboxElement).toBeDisabled();
	});

	it('should be rendered with custom size prop', () => {
		const onChangeMock = jest.fn();
		const { getByLabelText } = render(
			<Checkbox
				label='label'
				size='large'
				onChange={onChangeMock}
			/>
		);
		const checkboxElement = getByLabelText('label');

		expect(checkboxElement).toHaveClass('input large');
	});
});
