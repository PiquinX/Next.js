'use client'

import { useReadingList } from '../hooks/useReadingList'
import { type BookType, type ListOfBooksType } from '../lib/definitions'
import Book from './ListOfBooks/Book'
import BooksAvailability from './ListOfBooks/BooksAvailability'
import { filterBooks } from '../lib/utils'
import BooksFilter from './ListOfBooks/BooksFilter'
import { useFilters } from '../hooks/useFilters'
import { DATA_TRANSFER_KEY } from '../lib/consts'

interface Props {
  books: ListOfBooksType
}

const ListOfBooks: React.FC<Props> = ({ books }) => {
  const { readingList, removeBookFromReadingList } = useReadingList()
  const { filters, changeGenre } = useFilters()

  const handleDrop = (event: React.DragEvent): void => {
    const newData = event.dataTransfer.getData(DATA_TRANSFER_KEY)
    if (newData.split(',').length <= 4) return

    const book: BookType = JSON.parse(newData)
    removeBookFromReadingList(book)
  }

  const handleDragOver = (event: React.DragEvent): void => {
    event.preventDefault()
  }

  const availableBooks = filterBooks(filters.genre, books)

  return (
    <div className='flex flex-col gap-8'>
      <BooksAvailability availableBooks={availableBooks.length} readingList={readingList.length} />
      <BooksFilter changeGenre={changeGenre} />
      <div
        data-testid='list-of-books'
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className='grid w-full grid-cols-responsiveCols gap-10 min-h-[60vh]'>
          {
              availableBooks.map(book => (
                  <Book
                    book={book}
                    key={book.ISBN}
                  />
              ))
          }
      </div>
    </div>
  )
}

export default ListOfBooks
