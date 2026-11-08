import {
	type MouseEvent,
	type ReactNode,
	type SyntheticEvent,
	useEffect,
	useRef
} from 'react'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	labelledBy: string
	className?: string
	children: ReactNode
}

export const Modal = ({
	isOpen,
	onClose,
	labelledBy,
	className = '',
	children
}: ModalProps) => {
	const dialogRef = useRef<HTMLDialogElement>(null)

	useEffect(() => {
		const dialog = dialogRef.current

		if (!dialog) {
			return
		}

		if (isOpen && !dialog.open) {
			dialog.showModal()
		}

		if (!isOpen && dialog.open) {
			dialog.close()
		}
	}, [isOpen])

	const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
		if (event.target === event.currentTarget) {
			onClose()
		}
	}

	const handleCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
		event.preventDefault()
		onClose()
	}

	return (
		<dialog
			ref={dialogRef}
			aria-labelledby={labelledBy}
			onClick={handleBackdropClick}
			onCancel={handleCancel}
			className={`m-auto w-full rounded-lg bg-white p-0 shadow-xl backdrop:bg-black/50 backdrop:backdrop-blur-sm ${className}`}
		>
			{isOpen ? children : null}
		</dialog>
	)
}
