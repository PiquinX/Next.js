import { type GenreFilterType } from '@/app/lib/definitions'

interface Props {
  changeGenre: (newGenre: string) => void
}

export const genreFilters: GenreFilterType[] = ['Default', 'Fantasía', 'Ciencia ficción', 'Zombies', 'Terror']

const BooksFilter: React.FC<Props> = ({ changeGenre }) => {
  return (
        <div className='flex'>
          <select
            className='border-white border-2 rounded-md bg-[#111] py-1 px-3'
            onChange={(event) => { changeGenre(event.target.value) }}>
            {
              genreFilters.map((genre, index) => (
                <option key={index} value={genre}>{genre}</option>
              ))
            }
          </select>
        </div>
  )
}

export default BooksFilter
