import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
	title: 'Example/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
	args: {
		variant: 'contained',
		size: 'medium',
		children: 'Button',
	},
};

export const OutlinedDisabledLargeButton: Story = {
	args: {
		variant: 'outlined',
		disabled: true,
		size: 'large',
		children: 'Button',
	},
};
