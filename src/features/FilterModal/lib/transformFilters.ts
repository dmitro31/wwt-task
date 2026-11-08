import { FilterType } from '@/shared/api/types/Filter'
import type { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter'

import type { DraftOptions } from '../model/types'

export const transformFilters = (
	options: DraftOptions
): SearchRequestFilter => {
	const entries = Object.entries(options)

	const filtered = entries.filter(([, optionsIds]) => optionsIds.length > 0)

	return filtered.map(([id, optionsIds]) => ({
		id,
		type: FilterType.OPTION,
		optionsIds
	}))
}
