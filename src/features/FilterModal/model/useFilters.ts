import { useQuery } from '@tanstack/react-query'

import { getFilters } from '../api/getFilters'

export const useFilters = () =>
	useQuery({
		queryKey: ['filters'],
		queryFn: getFilters,
		staleTime: Infinity
	})
