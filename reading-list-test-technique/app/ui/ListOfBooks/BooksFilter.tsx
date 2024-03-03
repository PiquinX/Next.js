import { GENRE_FILTERS } from '../../lib/consts'
import { type GenreFilterType } from '@/app/lib/definitions'

interface Props {
  changeGenre: (newGenre: GenreFilterType) => void
}

const BooksFilter: React.FC<Props> = ({ changeGenre }) => {
  return (
        <div className='flex'>
          <select
            className='border-white border-2 rounded-md bg-[#111] py-1 px-3'
            onChange={(event) => { changeGenre(event.target.value) }}>
            {
              Object.values(GENRE_FILTERS).map((genre, index) => (
                <option key={index} value={genre}>{genre}</option>
              ))
            }
          </select>
        </div>
  )
}

export default BooksFilter
