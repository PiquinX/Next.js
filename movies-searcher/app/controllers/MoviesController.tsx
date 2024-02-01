import MoviesList from "../ui/MoviesList";
import { getMovies } from "../lib/actions";

export default async function MoviesController () {
    const movies = await getMovies()

    if(movies){
        return <MoviesList movies={movies} />
    }else {
        return <div>No Matching results</div>
    }
}