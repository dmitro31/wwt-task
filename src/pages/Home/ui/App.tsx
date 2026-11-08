import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { FilterModal } from '@/features/FilterModal'
import useAppliedFilters from '@/shared/store/useAppliedFilters'

import { AppliedFiltersPreview } from './AppliedFiltersPreview'

export const App = () => {
	const { t } = useTranslation('filter')
	const [isFilterOpen, setIsFilterOpen] = useState(false)
	const appliedFilters = useAppliedFilters(state => state.appliedFilters)

	return (
		<main className="p-6">
			<button
				type="button"
				onClick={() => setIsFilterOpen(true)}
				className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
			>
				{t('openFilters')}
			</button>

			<AppliedFiltersPreview filters={appliedFilters} />

			<FilterModal
				isOpen={isFilterOpen}
				onClose={() => setIsFilterOpen(false)}
			/>
		</main>
	)
}
