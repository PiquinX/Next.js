'use client'

import MoviesSearchController from '../controllers/MoviesSearchController'
import { redirect, useSearchParams } from 'next/navigation'

export default function Search (): JSX.Element {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)

  const { query, page } = {
    query: searchParams.get('search'),
    page: searchParams.get('page')
  }

  if (query === null) redirect('/')
  if (page === null) params.set('page', '1')

  return (
        <>
          <MoviesSearchController search={query} page={page ?? '1'} />
        </>
  )
}
