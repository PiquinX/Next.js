import { useReadingList } from '../hooks/useReadingList'
import { type GenreFilterType, type ListOfBooksType } from './definitions'
import { GENRE_FILTERS } from './consts'

export const filterBooks = (filter: GenreFilterType, books: ListOfBooksType): ListOfBooksType => {
  const { readingList } = useReadingList()

  const availableBooks = books.filter(book => readingList.findIndex(listBook => listBook.ISBN === book.ISBN) < 0)

  if (!Object.values(GENRE_FILTERS).includes(filter) || filter === GENRE_FILTERS.DEFAULT) return availableBooks

  const filteredAvailableBooks = availableBooks.filter(book => book.genre === filter)

  return filteredAvailableBooks
}
