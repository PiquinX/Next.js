import MoviesController from './controllers/MoviesController'

export default async function Home (): Promise<JSX.Element> {
  return (
      <MoviesController />
  )
}
