import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.modules.scss';

interface ModalProps {
	isOpen: boolean;
	children?: ReactNode;
	onClose?: () => void;
	title?: string;
	text?: string;
}

const Modal = ({ children, isOpen, onClose, title, text }: ModalProps) => {
	const [modalOpen, setModalOpen] = useState(isOpen);
	const modalRef = useRef<HTMLDialogElement | null>(null);

	useEffect(() => {
		setModalOpen(isOpen);
	}, [isOpen]);

	useEffect(() => {
		const modalElement = modalRef.current;
		if (modalElement) {
			if (modalOpen) {
				if (typeof modalElement.showModal === 'function') {
					modalElement.showModal();
				}
			} else {
				if (typeof modalElement.close === 'function') {
					modalElement.close();
				}
			}
		}
	}, [modalOpen]);

	const handleCloseModal = () => {
		if (onClose) {
			onClose();
		}
		setModalOpen(false);
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
		if (event.key === 'Escape') {
			handleCloseModal();
		}
	};
	return (
		<div>
			{createPortal(
				<dialog
					ref={modalRef}
					className={styles.modal}
					onKeyDown={handleKeyDown}
				>
					<h1 className={styles.title}>{title}</h1>
					<p>{text}</p>
					{children}
				</dialog>,
				document.body
			)}
		</div>
	);
};

export default Modal;
