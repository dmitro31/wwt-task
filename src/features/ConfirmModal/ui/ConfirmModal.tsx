import { useTranslation } from 'react-i18next'

import { Modal } from '@/shared/ui/Modal'

interface ConfirmModalProps {
	isOpen: boolean
	onConfirm: () => void
	onCancel: () => void
}

export const ConfirmModal = ({
	isOpen,
	onConfirm,
	onCancel
}: ConfirmModalProps) => {
	const { t } = useTranslation('filter')

	return (
		<Modal
			isOpen={isOpen}
			onClose={onCancel}
			labelledBy="confirm-modal-title"
			className="max-w-sm"
		>
			<div className="p-6">
				<h2
					id="confirm-modal-title"
					className="mb-6 text-center text-lg font-bold"
				>
					{t('confirm.title')}
				</h2>
				<div className="flex justify-center gap-3">
					<button
						type="button"
						onClick={onCancel}
						className="rounded border px-8 py-2 text-gray-700 hover:bg-gray-50"
					>
						{t('confirm.back')}
					</button>
					<button
						type="button"
						onClick={onConfirm}
						className="rounded bg-orange-600 px-4 py-2 text-white hover:bg-orange-500"
					>
						{t('confirm.confirm')}
					</button>
				</div>
			</div>
		</Modal>
	)
}
