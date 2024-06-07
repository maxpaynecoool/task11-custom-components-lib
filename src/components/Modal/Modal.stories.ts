import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
	title: 'Example/Modal',
	component: Modal,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalExample: Story = {
	args: {
		isOpen: true,
		title: 'Title',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias deserunt dignissimos, distinctio eligendi eveniet fugit ipsa labore magni molestias non officiis quasi qui quidem, repellat saepe similique sit. Quasi, qui!',
	},
};
