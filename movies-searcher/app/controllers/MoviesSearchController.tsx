import { useSearchParams } from "next/navigation"
import { searchMovies } from "../lib/actions"
import MoviesList from "../ui/MoviesList"
import PageSelector from "../ui/moviesList/PageSelector"


export default async function MoviesSearchController ({ search }: { search : string }){
    const searchParams = useSearchParams()
    
    const { page } = {
        page: searchParams.get('page') || '1',
    }

    const movies = await searchMovies({ search, page })

    if (movies){
        return (
            <>
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