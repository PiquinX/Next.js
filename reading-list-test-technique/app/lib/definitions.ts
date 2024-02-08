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

export type GenreFilterType = 'Default' | 'Fantasía' | 'Ciencia ficción' | 'Zombies' | 'Terror' | string

export interface FiltersType {
  genre: GenreFilterType
}
