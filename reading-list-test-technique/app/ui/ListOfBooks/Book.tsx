import { type BookType } from '@/app/lib/definitions'
import { useReadingList } from '../../hooks/useReadingList'
import { DATA_TRANSFER_KEY } from '../../lib/consts'

interface Props {
  book: BookType
}

const Book: React.FC<Props> = ({ book }) => {
  const { addBookToReadingList } = useReadingList()

  const handleOnDrag = (event: React.DragEvent, widgetType: BookType): void => {
    event.dataTransfer.setData(DATA_TRANSFER_KEY, JSON.stringify(widgetType))
  }

  return (
          <div
            data-testid={book.ISBN}
            draggable
            onDragStart={(event) => { handleOnDrag(event, book) }}
            onClick={() => { addBookToReadingList(book) }}
          >
              <img
                src={book.cover}
                className='h-96 w-64 duration-100 rounded-md hover:scale-105' />
          </div>
  )
}

export default Book
