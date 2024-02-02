import { useSearchParams } from "next/navigation"
import { searchMovies } from "../lib/actions"
import MoviesList from "../ui/MoviesList"


export default async function MoviesSearchController ({ search }: { search : string }){
    const searchParams = useSearchParams()
    
    const { page } = {
        page: searchParams.get('page') || '1',
    }

    const movies = await searchMovies({ search, page })

    if (movies){
        return <MoviesList 
            movies={movies.movies} 
            maxPages={movies.pages} 
            page={Number(page)} />
    } else {
        return <div>No Matching Results.</div>
    }
}