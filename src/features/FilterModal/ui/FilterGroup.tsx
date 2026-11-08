import type { FilterItem } from '@/shared/api/types/Filter'

import { FilterOption } from './FilterOption'

interface FilterGroupProps {
	filter: FilterItem
	selectedIds: string[]
	onToggle: (optionId: string, checked: boolean) => void
}

export const FilterGroup = ({
	filter,
	selectedIds,
	onToggle
}: FilterGroupProps) => (
	<fieldset className="border-b pb-3 last:border-0">
		<legend className="mb-2 font-semibold text-gray-800">{filter.name}</legend>
		<ul className="space-y-2 pl-2">
			{filter.options.map(option => (
				<FilterOption
					key={option.id}
					option={option}
					checked={selectedIds.includes(option.id)}
					onChange={checked => onToggle(option.id, checked)}
				/>
			))}
		</ul>
	</fieldset>
)
