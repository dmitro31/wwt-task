import { useCallback, useState } from 'react'

import type { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter'

import { toDraftOptions } from '../lib/toDraftOptions'
import type { DraftOptions } from './types'

export const useFilterDraft = (initialFilters: SearchRequestFilter) => {
	const [draft, setDraft] = useState<DraftOptions>(() =>
		toDraftOptions(initialFilters)
	)

	const toggleOption = useCallback(
		(categoryId: string, optionId: string, checked: boolean) => {
			setDraft(current => {
				const selected = current[categoryId] ?? []

				const next = checked
					? selected.includes(optionId)
						? selected
						: [...selected, optionId]
					: selected.filter(id => id !== optionId)

				return { ...current, [categoryId]: next }
			})
		},
		[]
	)

	return { draft, toggleOption }
}
