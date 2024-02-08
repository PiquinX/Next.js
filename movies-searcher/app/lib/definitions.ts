export interface FetchedMovie {
  'Title': string
  'Year': string
  'imdbID': string
  'Type': 'movie' | 'series'
  'Poster': string
}

export type FetchedMovies = FetchedMovie[]

export interface Movie {
  'title': string
  'year': string
  'id': string
  'type': 'movie' | 'series'
  'img': string
}

export type Movies = Movie[]
