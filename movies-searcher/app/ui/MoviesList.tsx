import { type Movies } from "../lib/definitions";
import Movie from'./moviesList/Movie'

export default function MoviesList ({ movies }: { movies: Movies }){
    return(
        <>
            {
                movies.map(movie => (
                    <Movie key={movie.id} { ...movie}/>
                ))
            }
        </>
    )
}