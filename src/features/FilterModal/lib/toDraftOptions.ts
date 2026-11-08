import type { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter'

import type { DraftOptions } from '../model/types'

export const toDraftOptions = (filters: SearchRequestFilter): DraftOptions =>
	filters.reduce<DraftOptions>((acc, filter) => {
		acc[filter.id] = filter.optionsIds
		return acc
	}, {})
