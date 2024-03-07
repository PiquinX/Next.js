'use client'

import { SEARCH_PARAMS } from '../../lib/constants'
import { useSearchParams, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
const WAIT_BETWEEN_CHANGE = 300

export default function Searcher (): JSX.Element {
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const handleChange = useDebouncedCallback((search: string) => {
    const params = new URLSearchParams(searchParams)
    if (search.length > 0) {
      // Changing the search
      params.set(SEARCH_PARAMS.SEARCH, search)
      params.set(SEARCH_PARAMS.PAGE, '1')
    } else {
      params.delete(SEARCH_PARAMS.SEARCH)
    }

    // Updating the params on the URL.
    replace(`/search?${params.toString()}`)
  }, WAIT_BETWEEN_CHANGE)

  return (
        <input
          data-testid='searcher'
          onChange={(event) => handleChange(event.target.value)}
          placeholder="Search movies"
          className="py-1 px-2 focus:outline-2 outline-1 outline rounded-sm duration-75"
          defaultValue={searchParams.get('search') ?? ''}
        />
  )
}
