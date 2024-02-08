import MoviesList from '../ui/MoviesList'
import { getMovies } from '../lib/actions'

export default async function MoviesController (): Promise<JSX.Element> {
  const movies = await getMovies()

  if (movies !== false) {
    return <MoviesList movies={movies} />
  } else {
    return <div>No Matching results</div>
  }
}
