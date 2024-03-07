import { searchMovies } from '../lib/actions'
import MoviesListWithPages from '../ui/search/MoviesListWithPages'

interface Props {
  search: string
  page: string
}

const MoviesSearchController: React.FC<Props> = async ({ search, page }) => {
  const movies = await searchMovies({ search, page })

  if (typeof movies === 'object') {
    return (
              <MoviesListWithPages
                search={search}
                movies={movies.movies}
                totalResults={movies.totalResults}
                maxPages={movies.pages}
              />
    )
  } else {
    return <div>No Matching Results.</div>
  }
}

export default MoviesSearchController
