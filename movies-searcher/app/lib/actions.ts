import { type Movies, type FetchedMovies, type FetchedMovie, type Movie } from "./definitions"

export async function searchMovies ({ search } : { search : string }): Promise<Movies | false> {

    try{
        const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1c74998f&s=${search}`)

        const response = await res.json()

        const movies: FetchedMovies = response.Search

        const formatedMovies = movies.map((movie: FetchedMovie): Movie => ({
            title: movie.Title,
            year: movie.Year,
            id: movie.imdbID,
            img: movie.Poster,
            type: movie.Type
        })) 
        
        return formatedMovies

    } catch (error){
        console.error(`Failed to search movies`)

        return false
    }
}

export async function getMovies (): Promise<Movies | false> {
    try{
        const res = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=1c74998f&s=lord')
        const response = await res.json()
        const movies: FetchedMovies = response.Search

        const formatedMovies = movies.map((movie: FetchedMovie): Movie => ({
            title: movie.Title,
            year: movie.Year,
            id: movie.imdbID,
            img: movie.Poster,
            type: movie.Type
        })) 

        return formatedMovies

    } catch (error){
        console.error(`Failed to fetch movies`)

        return false
    }
}