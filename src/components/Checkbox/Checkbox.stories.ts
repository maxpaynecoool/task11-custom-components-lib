import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
	title: 'Example/Checkbox',
	component: Checkbox,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
	args: {
		label: 'Small',
		checked: false,
		size: 'small',
	},
};

export const Medium: Story = {
	args: {
		label: 'Medium',
		checked: true,
		size: 'medium',
	},
};

export const Large: Story = {
	args: {
		label: 'Large',
		checked: true,
		size: 'large',
	},
};

export const Default: Story = {
	args: {
		label: 'Default',
	},
};

export const Disabled: Story = {
	args: {
		label: 'Disabled',
		disabled: true,
		checked: true,
	},
};
