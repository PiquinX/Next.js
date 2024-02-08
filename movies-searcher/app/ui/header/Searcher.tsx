'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
const WAIT_BETWEEN_CHANGE = 300

export default function Searcher (): JSX.Element {
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const handleChange = useDebouncedCallback((search: string) => {
    const params = new URLSearchParams(searchParams)
    if (search.length > 0) {
      params.set('search', search)
      params.set('page', '1')
    } else {
      params.delete('search')
    }

    replace(`/search?${params.toString()}`)
  }, WAIT_BETWEEN_CHANGE)

  return (
        <input
            onChange={(event) => handleChange(event.target.value)}
            placeholder="Search a movie"
            className="py-1 px-2 focus:outline-2 outline-1 outline rounded-sm duration-75"
            defaultValue={searchParams.get('search') ?? ''}
        />
  )
}
