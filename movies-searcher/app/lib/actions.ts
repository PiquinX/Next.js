import { type Movies, type FetchedMovies, type FetchedMovie, type Movie } from './definitions'

interface SearchMoviesReturn {
  movies: Movies
  pages: number
  totalResults: number
}

export async function searchMovies (
  { search, page }: { search: string, page: string }
): Promise<SearchMoviesReturn | false> {
  try {
    const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1c74998f&s=${search}&page=${page}`)

    const response = await res.json()

    const fetchedMovies: FetchedMovies = response.Search

    const pages = Math.round((response.totalResults / 10) + 1)
    const totalResults = response.totalResults

    const movies = fetchedMovies.map((movie: FetchedMovie): Movie => ({
      title: movie.Title,
      year: movie.Year,
      id: movie.imdbID,
      img: movie.Poster,
      type: movie.Type
    }))

    return { movies, pages, totalResults }
  } catch (error) {
    console.error('Failed to search movies')

    return false
  }
}

export async function getMovies (): Promise<Movies | false> {
  try {
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
  } catch (error) {
    console.error('Failed to fetch movies')

    return false
  }
}

export async function getMovie ({ id }: { id: string }): Promise<Movie | false> {
  try {
    const res = await fetch(`http://www.omdbapi.com/?apikey=1c74998f&i=${id}`)
    const response = await res.json()

    if (response.response === false) throw new Error()

    const formatedMovie = {
      title: response.Title,
      year: response.Year,
      id: response.imdbID,
      img: response.Poster,
      type: response.Type
    }

    return formatedMovie
  } catch (error) {
    console.error('Failed to fetch movies')
    console.log(error)

    return false
  }
}
