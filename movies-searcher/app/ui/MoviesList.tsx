import { type Movies } from "../lib/definitions";
import Movie from'./moviesList/Movie'

export default function MoviesList (
    { movies }: { movies: Movies }
){
    return(
            <div className="grid rounded-lg bg-white grid-cols-responsive gap-10 px-20 py-16">
                {
                    movies.map(movie => (
                        <Movie key={movie.id} { ...movie}/>
                    ))
                }
            </div>
    )
}