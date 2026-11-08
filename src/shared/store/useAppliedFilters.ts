import { create } from 'zustand'

import { type SearchRequestFilter } from '../api/types/SearchRequest/SearchRequestFilter'

type AppliedFiltersStore = {
	appliedFilters: SearchRequestFilter
	setAppliedFilters: (filters: SearchRequestFilter) => void
}

const useAppliedFilters = create<AppliedFiltersStore>(set => ({
	appliedFilters: [],

	setAppliedFilters: filter => {
		set({
			appliedFilters: filter
		})
	}
}))

export default useAppliedFilters
