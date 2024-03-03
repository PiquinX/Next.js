// import { describe, test, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import ListOfBooks from '../app/ui/ListOfBooks'
import { type BookType, type ReadingListContextType } from '@/app/lib/definitions'
import { ReadingListContext, ReadingListProvider } from '../app/contexts/ReadingListContext'
import ReadingList from '../app/ui/ReadingList'

const books = [
  {
    title: 'The Fellowship of The Ring',
    pages: 678,
    genre: 'Fanstasy',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg',
    synopsis: 'Una aventura épica en un mundo de fantasía llamado la Tierra Media.',
    year: 1954,
    ISBN: '978-0618640157',
    author: {
      name: 'J.R.R. Tolkien',
      otherBooks: [
        'El Hobbit',
        'El Silmarillion'
      ]
    }
  },
  {
    title: 'Juego de Tronos',
    pages: 694,
    genre: 'Fanstasy',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg',
    synopsis: 'En un reino donde las estaciones duran años, una batalla épica por el trono se desarrolla.',
    year: 1996,
    ISBN: '978-0553103540',
    author: {
      name: 'George R. R. Martin',
      otherBooks: [
        'Choque de Reyes',
        'Tormenta de Espadas',
        'Festín de Cuervos'
      ]
    }
  }
]

describe('List Of Books', () => {
  test('should render a list of books', () => {
    const rlcForTest: ReadingListContextType = {
      readingList: [],
      addBookToReadingList: (newBook: BookType) => {},
      removeBookFromReadingList: (bookToRemove: BookType) => {}
    }

    render(
      <ReadingListContext.Provider value={rlcForTest}>
        <ListOfBooks books={books} />
      </ReadingListContext.Provider>
    )

    expect(screen.getByTestId('list-of-books').childElementCount).toBeGreaterThan(0)
  })

  test('should not render the book in the context', () => {
    const rlcForTest: ReadingListContextType = {
      readingList: [books[1]],
      addBookToReadingList: (newBook: BookType) => {},
      removeBookFromReadingList: (bookToRemove: BookType) => {}
    }

    render(
      <ReadingListContext.Provider value={rlcForTest}>
        <ListOfBooks books={books} />
      </ReadingListContext.Provider>
    )

    expect(screen.getByTestId('list-of-books').childElementCount).toBeLessThan(books.length)
  })

  test('should add a book to the reading list', () => {
    render(
      <ReadingListProvider>
        <ListOfBooks books={books} />
      </ReadingListProvider>
    )

    // Adding a book.
    const addButton = screen.getByTestId('978-0618640157')
    // addButton.click() // This only works if it's a truly button, and in this case it's a div.
    fireEvent.click(addButton)

    // The book should've been added, thus list-of-books shouldn't display it.
    expect(screen.getByTestId('list-of-books').childElementCount).toBeLessThan(books.length)
  })
})

describe('Reading List', () => {
  test('should render a Reading List', () => {
    const rlcForTest: ReadingListContextType = {
      readingList: books,
      addBookToReadingList: (newBook: BookType) => {},
      removeBookFromReadingList: (bookToRemove: BookType) => {}
    }

    render(
      <ReadingListContext.Provider value={rlcForTest}>
        <ReadingList />
      </ReadingListContext.Provider>
    )

    expect(screen.getByTestId('reading-list').childElementCount).toBeGreaterThan(0)
  })

  test('should remove a book from the reading list', () => {
    render(
      <ReadingListProvider>
        <>
          <ReadingList />
          <ListOfBooks books={books} />
        </>
      </ReadingListProvider>
    )

    // Adding a book to the list to remove it later.
    const addButton = screen.getByTestId('978-0618640157')
    fireEvent.click(addButton)

    // Removing a book from the reading list.
    const removeButton = screen.getByTestId('reading-978-0618640157')
    fireEvent.click(removeButton)

    // The book should've been removed, thus it should equal to 0.
    expect(screen.getByTestId('reading-list').childElementCount).toEqual(0)
  })
})
