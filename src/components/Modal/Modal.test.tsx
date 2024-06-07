import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
	it('should be rendered', () => {
		const { getByText, getByRole } = render(
			<Modal
				title={'Title'}
				text={'test'}
				isOpen={true}
			/>
		);
		const modalDialog = getByRole('dialog', { hidden: true });

		expect(modalDialog).toBeInTheDocument();
		expect(getByText('test')).toBeInTheDocument();
	});
});
