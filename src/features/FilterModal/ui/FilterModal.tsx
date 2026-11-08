import { Modal } from '@/shared/ui/Modal'

import { FilterModalContent } from './FilterModalContent'

interface FilterModalProps {
	isOpen: boolean
	onClose: () => void
}

export const FilterModal = ({ isOpen, onClose }: FilterModalProps) => (
	<Modal
		isOpen={isOpen}
		onClose={onClose}
		labelledBy="filter-modal-title"
		className="max-w-lg"
	>
		<FilterModalContent onClose={onClose} />
	</Modal>
)
