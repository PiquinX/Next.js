import { useState } from 'react'
import { type FiltersType } from '../lib/definitions'
// import { type GenreFilterType } from '../lib/definitions'

interface ReturnType {
  filters: FiltersType
  changeGenre: (newGenre: string) => void
}

export const useFilters = (): ReturnType => {
  const [filters, setFilters] = useState<FiltersType>({
    genre: 'Default'
  })

  const changeGenre = (newGenre: string): void => {
    const newFilters = structuredClone(filters)

    newFilters.genre = newGenre

    setFilters(newFilters)
  }

  return { filters, changeGenre }
}
