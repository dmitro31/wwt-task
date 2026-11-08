import type { FilterItem } from '../../../shared/api/types/Filter'
import filterData from '../../../shared/temp/filterData.json'

export const getFilters = (): FilterItem[] =>
	filterData.filterItems as FilterItem[]
