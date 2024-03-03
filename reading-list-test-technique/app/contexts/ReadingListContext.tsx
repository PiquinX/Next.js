'use client'

import { createContext, useEffect, useState } from 'react'
import { type ReadingListType, type BookType, type ReadingListContextType } from '../lib/definitions'

const initialReadingList: ReadingListType = JSON.parse(localStorage.getItem('reading-list')) ?? []

const initialValue: ReadingListContextType = {
  readingList: initialReadingList,
  addBookToReadingList: (newBook: BookType) => {},
  removeBookFromReadingList: (bookToRemove: BookType) => {}
}

export const ReadingListContext = createContext(initialValue)

export const ReadingListProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  const [readingList, setReadingList] = useState<ReadingListType>(initialValue.readingList)

  const addBookToReadingList = (newBook: BookType): void => {
    const newBookIndex = readingList.findIndex(book => book.ISBN === newBook.ISBN)

    if (newBookIndex >= 0) return

    const newReadingList = structuredClone(readingList)
    newReadingList.push(newBook)

    setReadingList(newReadingList)
  }

  const removeBookFromReadingList = (bookToRemove: BookType): void => {
    const bookToRemoveIndex = readingList.findIndex(book => book.ISBN === bookToRemove.ISBN)

    if (bookToRemoveIndex === -1) return

    const newReadingList = structuredClone(readingList)
    newReadingList.splice(bookToRemoveIndex, 1)

    setReadingList(newReadingList)
  }

  useEffect(() => {
    localStorage.setItem('reading-list', JSON.stringify(readingList))
  }, [readingList])

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent): void => {
      if (event.key === 'reading-list') {
        setReadingList(JSON.parse(event.newValue))
      }
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return (
        <ReadingListContext.Provider value={{
          readingList,
          addBookToReadingList,
          removeBookFromReadingList
        }}>
            {children}
        </ReadingListContext.Provider>
  )
}
