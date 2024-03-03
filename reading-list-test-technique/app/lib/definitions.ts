import { type GENRE_FILTERS } from './consts'

interface Author {
  'name': string
  'otherBooks': string[]
}

export interface ResponseBookType {
  'book': {
    'title': string
    'pages': number
    'genre': string
    'cover': string
    'synopsis': string
    'year': number
    'ISBN': string
    'author': Author
  }

}

export type ResponseListOfBooksType = ResponseBookType[]

export interface BookType {
  'title': string
  'pages': number
  'genre': string
  'cover': string
  'synopsis': string
  'year': number
  'ISBN': string
  'author': Author
}

export type ListOfBooksType = BookType[]

export type ReadingListType = ListOfBooksType | []

export interface ReadingListContextType {
  readingList: ReadingListType
  addBookToReadingList: (newBook: BookType) => void
  removeBookFromReadingList: (bookToRemove: BookType) => void
}

export type GenreFilterType = typeof GENRE_FILTERS[keyof typeof GENRE_FILTERS]

export interface FiltersType {
  genre: GenreFilterType
}
