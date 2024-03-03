import { useState } from 'react'
import { type GenreFilterType, type FiltersType } from '../lib/definitions'
// import { type GenreFilterType } from '../lib/definitions'

interface ReturnType {
  filters: FiltersType
  changeGenre: (newGenre: GenreFilterType) => void
}

export const useFilters = (): ReturnType => {
  const [filters, setFilters] = useState<FiltersType>({
    genre: 'Default'
  })

  const changeGenre = (newGenre: GenreFilterType): void => {
    const newFilters = structuredClone(filters)

    newFilters.genre = newGenre

    setFilters(newFilters)
  }

  return { filters, changeGenre }
}
