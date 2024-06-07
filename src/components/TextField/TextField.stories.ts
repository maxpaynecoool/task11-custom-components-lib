import type { Meta, StoryObj } from '@storybook/react';

import TextField from './TextField';

const meta: Meta<typeof TextField> = {
	title: 'Example/TextField',
	component: TextField,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standart: Story = {
	args: {
		label: 'Standart',
		variant: 'standart',
	},
};

export const Outlined: Story = {
	args: {
		label: 'Outlined',
		variant: 'outlined',
	},
};

export const Filled: Story = {
	args: {
		label: 'Filled',
		variant: 'filled',
	},
};

export const StandartError: Story = {
	args: {
		label: 'Error',
		variant: 'standart',
		error: true,
	},
};

export const OutlinedError: Story = {
	args: {
		label: 'Error',
		variant: 'outlined',
		error: true,
	},
};

export const FilledError: Story = {
	args: {
		label: 'Error',
		variant: 'filled',
		error: true,
	},
};

export const DefaultInput: Story = {
	args: {
		label: 'Default',
	},
};
