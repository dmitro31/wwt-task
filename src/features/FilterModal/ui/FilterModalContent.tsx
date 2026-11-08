import { useTranslation } from 'react-i18next'

import { useFilters } from '../model/useFilters'
import { FilterForm } from './FilterForm'

interface FilterModalContentProps {
	onClose: () => void
}

export const FilterModalContent = ({ onClose }: FilterModalContentProps) => {
	const { t } = useTranslation('filter')
	const { data, isLoading, error } = useFilters()

	return (
		<div className="p-6">
			<header className="mb-4 border-b pb-3">
				<div className="flex justify-end">
					<button
						type="button"
						onClick={onClose}
						aria-label={t('close')}
						className="text-2xl text-gray-500 hover:text-gray-700"
					>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<h2
					id="filter-modal-title"
					className="text-center text-xl font-bold"
				>
					{t('title')}
				</h2>
			</header>

			{isLoading && (
				<p
					role="status"
					className="p-4 text-center"
				>
					{t('loading')}
				</p>
			)}

			{!isLoading && (error || !data) && (
				<p
					role="alert"
					className="p-4 text-center text-red-500"
				>
					{t('error')}
				</p>
			)}

			{data && (
				<FilterForm
					filters={data}
					onApplied={onClose}
				/>
			)}
		</div>
	)
}
