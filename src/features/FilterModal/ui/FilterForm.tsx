import { type FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ConfirmModal } from '@/features/ConfirmModal'
import type { FilterItem } from '@/shared/api/types/Filter'
import useAppliedFilters from '@/shared/store/useAppliedFilters'

import { transformFilters } from '../lib/transformFilters'
import { useFilterDraft } from '../model/useFilterDraft'
import { FilterGroup } from './FilterGroup'

interface FilterFormProps {
	filters: FilterItem[]
	onApplied: () => void
}

export const FilterForm = ({ filters, onApplied }: FilterFormProps) => {
	const { t } = useTranslation('filter')

	const appliedFilters = useAppliedFilters(state => state.appliedFilters)
	const setAppliedFilters = useAppliedFilters(state => state.setAppliedFilters)

	const { draft, toggleOption } = useFilterDraft(appliedFilters)
	const [isConfirmOpen, setIsConfirmOpen] = useState(false)

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setIsConfirmOpen(true)
	}

	const handleConfirm = () => {
		setAppliedFilters(transformFilters(draft))
		setIsConfirmOpen(false)
		onApplied()
	}

	const handleConfirmCancel = () => {
		setIsConfirmOpen(false)
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="max-h-[50vh] space-y-4 overflow-y-auto pr-2">
					{filters.map(filter => (
						<FilterGroup
							key={filter.id}
							filter={filter}
							selectedIds={draft[filter.id] ?? []}
							onToggle={(optionId, checked) =>
								toggleOption(filter.id, optionId, checked)
							}
						/>
					))}
				</div>
				<div className="mt-6 flex justify-center border-t pt-6">
					<button
						type="submit"
						className="rounded bg-orange-600 px-4 py-2 text-white hover:bg-orange-500"
					>
						{t('apply')}
					</button>
				</div>
			</form>

			<ConfirmModal
				isOpen={isConfirmOpen}
				onConfirm={handleConfirm}
				onCancel={handleConfirmCancel}
			/>
		</>
	)
}
