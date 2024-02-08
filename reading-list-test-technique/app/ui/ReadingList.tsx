'use client'

import { useReadingList } from '../hooks/useReadingList'
import { type BookType } from '../lib/definitions'

const ReadingList = (): JSX.Element => {
  const { readingList, removeBookFromReadingList, addBookToReadingList } = useReadingList()
  // const isBookDragging = useRef<boolean>(false)

  const handleDrop = (event: React.DragEvent): void => {
    const book: BookType = JSON.parse(event.dataTransfer.getData('widgetType'))
    addBookToReadingList(book)
  }

  const handleDragOver = (event: React.DragEvent): void => {
    event.preventDefault()
  }

  const handleOnDrag = (event: React.DragEvent, widgetType: BookType): void => {
    event.dataTransfer.setData('widgetType', JSON.stringify(widgetType))
  }

  return (
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className='bg-[#202830] rounded-lg items-center min-h-[90vh] sticky top-16 flex flex-col gap-5 py-6 px-10'
        >
          <h3
            draggable={false}
            className='text-4xl'>Reading List</h3>
          <div className='flex flex-col gap-5'>
            {
                readingList.map(book => (
                    <div
                      draggable
                      onDragStart={(event) => { handleOnDrag(event, book) }}
                      key={book.ISBN}
                      onClick={() => { removeBookFromReadingList(book) }}
                    >
                      <img
                          src={book.cover}
                          className='w-56 duration-100 rounded-md hover:scale-105' />
                    </div>
                ))
            }
          </div>
        </div>
  )
}

export default ReadingList
