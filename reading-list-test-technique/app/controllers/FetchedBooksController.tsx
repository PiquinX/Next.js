import { getBooks } from '../lib/actions'
import ListOfBooks from '../ui/ListOfBooks'

const FetchedBooksController = async (): Promise<JSX.Element> => {
  const books = await getBooks()

  if (books) {
    return <ListOfBooks books={books} />
  } else {
    return <div>Error Loading Books</div>
  }
}

export default FetchedBooksController
