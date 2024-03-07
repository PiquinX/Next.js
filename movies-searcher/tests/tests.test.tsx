import { render, screen } from '@testing-library/react'
import MoviesList from '../app/ui/MoviesList'
import { type Movies } from '../app/lib/definitions'
// import moviesMock from './mocks/movies.JSON'

const moviesMock: Movies = [

  {

    title: 'The Lord of the Rings: The Fellowship of the Ring',

    year: '2001',

    id: 'tt0120737',

    img:

      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',

    type: 'movie'

  },

  {

    title: 'The Lord of the Rings: The Return of the King',

    year: '2003',

    id: 'tt0167260',

    img:

      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',

    type: 'movie'

  },

  {

    title: 'The Lord of the Rings: The Two Towers',

    year: '2002',

    id: 'tt0167261',

    img:

      'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',

    type: 'movie'

  },

  {

    title: 'The Lord of the Rings: The Rings of Power',

    year: '2022–',

    id: 'tt7631058',

    img:

      'https://m.media-amazon.com/images/M/MV5BNTg3NjcxYzgtYjljNC00Y2I2LWE3YmMtOTliZTkwYTE1MmZiXkEyXkFqcGdeQXVyNTY4NDc5MDE@._V1_SX300.jpg',

    type: 'series'

  },

  {

    title: 'Lord of War',

    year: '2005',

    id: 'tt0399295',

    img:

      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',

    type: 'movie'

  },

  {

    title: 'The Lord of the Rings',

    year: '1978',

    id: 'tt0077869',

    img:

      'https://m.media-amazon.com/images/M/MV5BOGExMjIxNTMtY2M2NS00YTg0LTgyMDMtZWMyNDZmODZjZTVkXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg',

    type: 'movie'

  },

  {

    title: 'Lord of the Flies',

    year: '1990',

    id: 'tt0100054',

    img:

      'https://m.media-amazon.com/images/M/MV5BMDczN2I3NzItNjdlMS00YmNhLTkyODQtZGI1YWQ0NmViMTgwXkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg',

    type: 'movie'

  },

  {

    title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',

    year: '1984',

    id: 'tt0087365',

    img:

      'https://m.media-amazon.com/images/M/MV5BM2NmYjZjOGItYTQ0ZC00YjcyLTk3MWUtYzdmZjY1MGNkMDViXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg',

    type: 'movie'

  },

  {

    title: 'Lord of the Flies',

    year: '1963',

    id: 'tt0057261',

    img:

      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',

    type: 'movie'

  },

  {

    title: 'Lord of Illusions',

    year: '1995',

    id: 'tt0113690',

    img:

      'https://m.media-amazon.com/images/M/MV5BNDg1OTc0MDQwNl5BMl5BanBnXkFtZTcwMjQ3NDk0NA@@._V1_SX300.jpg',

    type: 'movie'

  }

]

describe('MoviesList', () => {
  test('should render a list of movies', () => {
    render(<MoviesList movies={moviesMock} />)

    expect(screen.getByTestId('movies-list').childElementCount).toBeGreaterThan(0)
  })
})
