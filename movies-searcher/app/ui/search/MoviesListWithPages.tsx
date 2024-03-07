import PageSelector from '../moviesList/PageSelector'
import { type Movies } from '@/app/lib/definitions'
import MoviesList from '../MoviesList'

interface Props {
  movies: Movies
  maxPages: number
  totalResults: number
  search: string
}

const MoviesListWithPages: React.FC<Props> = ({ movies, maxPages, search, totalResults }) => {
  const searchForURL = search.split(' ').join('+')

  return (
        <>
            <div className='w-max mb-2 text-md'>
              {`Results of search: "${search}": ${totalResults}`}
            </div>

            <MoviesList movies={movies} />

            <PageSelector search={searchForURL} maxPages={maxPages} />
        </>
  )
}

export default MoviesListWithPages
