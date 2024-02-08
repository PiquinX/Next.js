import { type BookType } from '@/app/lib/definitions'
import { useReadingList } from '@/app/hooks/useReadingList'

interface Props {
  book: BookType
}

const Book: React.FC<Props> = ({ book }) => {
  const { addBookToReadingList } = useReadingList()

  const handleOnDrag = (event: React.DragEvent, widgetType: BookType): void => {
    event.dataTransfer.setData('widgetType', JSON.stringify(widgetType))
  }

  return (
          <div
            data-testid="book"
            draggable
            onDragStart={(event) => { handleOnDrag(event, book) }}
          >
              <img
                onClick={() => { addBookToReadingList(book) }}
                src={book.cover}
                className='h-96 w-64 duration-100 rounded-md hover:scale-105' />
          </div>
  )
}

export default Book
