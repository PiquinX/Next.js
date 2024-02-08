interface Props {
  availableBooks: number
  readingList: number
}

const BooksAvailability: React.FC<Props> = ({ availableBooks, readingList }) => {
  return (
        <div className="flex flex-col gap-4">
            <h2
              className='text-3xl'
              data-testid="available-title">{availableBooks} books available</h2>

            <h4
                className={`${readingList !== 0 ? '' : 'select-none opacity-0'}  text-xl`}
            >
                {readingList} books in the reading list
            </h4>
        </div>
  )
}

export default BooksAvailability
