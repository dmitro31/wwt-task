import { useId } from 'react'

import type { FilterItem } from '@/shared/api/types/Filter'

type Option = FilterItem['options'][number]

interface FilterOptionProps {
	option: Option
	checked: boolean
	onChange: (checked: boolean) => void
}

export const FilterOption = ({
	option,
	checked,
	onChange
}: FilterOptionProps) => {
	const descriptionId = useId()

	return (
		<li className="flex flex-col">
			<label className="flex cursor-pointer items-center gap-2 text-sm">
				<input
					type="checkbox"
					className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
					checked={checked}
					aria-describedby={option.description ? descriptionId : undefined}
					onChange={event => onChange(event.target.checked)}
				/>
				<span>{option.name}</span>
			</label>
			{option.description && (
				<p
					id={descriptionId}
					className="pl-6 text-xs text-gray-500"
				>
					{option.description}
				</p>
			)}
		</li>
	)
}
