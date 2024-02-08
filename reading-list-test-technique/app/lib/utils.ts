import { useReadingList } from '../hooks/useReadingList'
import { type GenreFilterType, type ListOfBooksType } from './definitions'
import { genreFilters } from '../ui/ListOfBooks/BooksFilter'

export const filterBooks = (filter: GenreFilterType, books: ListOfBooksType): ListOfBooksType => {
  const { readingList } = useReadingList()

  const availableBooks = books.filter(book => readingList.findIndex(listBook => listBook.ISBN === book.ISBN) < 0)

  if (!genreFilters.includes(filter) || filter === 'Default') return availableBooks

  const filteredAvailableBooks = availableBooks.filter(book => book.genre === filter)

  return filteredAvailableBooks
}
