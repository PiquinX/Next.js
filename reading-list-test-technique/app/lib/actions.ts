import { type ListOfBooksType } from './definitions'
import books from './mocks/books.json'

export const getBooks = async (): Promise<ListOfBooksType | undefined> => {
  await new Promise(resolve => setTimeout(resolve, 1500))

  const formatedBooks = books.library.map(book => ({
    title: book.book.title,
    pages: book.book.pages,
    genre: book.book.genre,
    cover: book.book.cover,
    synopsis: book.book.synopsis,
    year: book.book.year,
    ISBN: book.book.ISBN,
    author: {
      name: book.book.author.name,
      otherBooks: book.book.author.otherBooks.map(otherBook => otherBook)
    }
  }))

  return formatedBooks
}
