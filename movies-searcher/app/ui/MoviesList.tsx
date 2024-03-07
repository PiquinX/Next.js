import { type Movies } from '../lib/definitions'
import Movie from './moviesList/Movie'

interface Props {
  movies: Movies
}

const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
            <div
              data-testid='movies-list'
              className="grid rounded-lg bg-white grid-cols-responsive gap-10 px-20 py-16">
                {
                    movies.map(movie => (
                        <Movie key={movie.id} { ...movie}/>
                    ))
                }
            </div>
  )
}

export default MoviesList
