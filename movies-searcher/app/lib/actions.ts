import { type Movies, type FetchedMovies, type Movie } from './definitions'

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

    // Make an operation to obtain the amount of pages
    const pages = Math.round((response.totalResults / 10) + 1)
    const totalResults = response.totalResults

    // Formating List of movies
    const movies = fetchedMovies.map((movie): Movie => ({
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

    // Formating List of movies
    const formatedMovies = movies.map((movie): Movie => ({
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

    // If the API doesn't find the movie it throw an Error
    if (response.response === false) throw new Error()

    // Formating movie
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
