import { searchMovies } from '../lib/actions'
import MoviesList from '../ui/MoviesList'
import PageSelector from '../ui/moviesList/PageSelector'

interface Props {
  search: string
  page: string
}

const MoviesSearchController: React.FC<Props> = async ({ search, page }) => {
  const movies = await searchMovies({ search, page })

  console.log(typeof movies)
  if (typeof movies === 'object') {
    return (
            <>
                <div>
                    {`Results of search: "${search}": ${movies.totalResults}`}
                </div>
                <MoviesList
                    movies={movies.movies}
                />

                <PageSelector maxPages={movies.pages} />
            </>
    )
  } else {
    return <div>No Matching Results.</div>
  }
}

export default MoviesSearchController
