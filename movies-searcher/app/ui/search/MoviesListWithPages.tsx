import PageSelector from "../moviesList/PageSelector";
import { type Movies } from "@/app/lib/definitions";
import Movie from "../moviesList/Movie";

export default function MoviesListWithPages (
    { movies, maxPages }: { movies: Movies, maxPages: number }
){
    return(
        <>
            <div className="grid grid-cols-responsive gap-10 px-20">
                {
                    movies.map(movie => (
                        <Movie key={movie.id} { ...movie}/>
                    ))
                }
            </div>

            <PageSelector maxPages={maxPages} />
        </>
    )
}