'use client'

import MoviesSearchController from '../controllers/MoviesSearchController'
import { redirect, useSearchParams } from 'next/navigation'
import { SEARCH_PARAMS } from '../lib/constants'

export default function Page (): JSX.Element {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)

  const { query, page } = {
    query: searchParams.get(SEARCH_PARAMS.SEARCH),
    page: searchParams.get(SEARCH_PARAMS.PAGE)
  }

  if (query === null) redirect('/')
  if (page === null) {
    params.set(SEARCH_PARAMS.PAGE, '1')
    // replace(`/search?${params.toString()}`)
  }

  return (
        <>
          <MoviesSearchController search={query} page={page ?? '1'} />
        </>
  )
}
