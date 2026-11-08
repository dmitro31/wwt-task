import { useTranslation } from 'react-i18next'

import type { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter'

interface AppliedFiltersPreviewProps {
	filters: SearchRequestFilter
}

export const AppliedFiltersPreview = ({
	filters
}: AppliedFiltersPreviewProps) => {
	const { t } = useTranslation('filter')

	return (
		<section className="mt-4">
			<h2 className="mb-2 text-sm font-semibold text-gray-700">
				{t('appliedTitle')}
			</h2>
			<pre className="whitespace-pre-wrap rounded bg-gray-100 p-4 font-mono text-sm">
				{JSON.stringify(filters, null, 2)}
			</pre>
		</section>
	)
}
