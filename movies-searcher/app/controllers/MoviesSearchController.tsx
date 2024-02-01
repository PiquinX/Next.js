import { searchMovies } from "../lib/actions"
import MoviesList from "../ui/MoviesList"

export default async function MoviesSearchController ({ search }: { search : string }){
    const movies = await searchMovies({ search })

    if (movies){
        return <MoviesList movies={movies} />
    } else {
        return <div>No Matching Results.</div>
    }
}