import PageSelector from '../moviesList/PageSelector'
import { type Movies } from '@/app/lib/definitions'
import MoviesList from '../MoviesList'

interface Props {
  movies: Movies
  maxPages: number
}

const MoviesListWithPages: React.FC<Props> = ({ movies, maxPages }) => {
  return (
        <>
            <MoviesList movies={movies} />

            <PageSelector maxPages={maxPages} />
        </>
  )
}

export default MoviesListWithPages
