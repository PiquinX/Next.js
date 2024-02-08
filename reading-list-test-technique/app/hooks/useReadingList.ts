'use client'

import { useContext } from 'react'
import { ReadingListContext } from '../contexts/ReadingListContext'
import { type ReadingListContextType } from '../lib/definitions'

export const useReadingList = (): ReadingListContextType => {
  const { addBookToReadingList, readingList, removeBookFromReadingList } = useContext(ReadingListContext)

  return { addBookToReadingList, readingList, removeBookFromReadingList }
}
