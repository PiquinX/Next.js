import MoviesController from './controllers/MoviesController'

export default async function Home (): Promise<JSX.Element> {
  return (
    <>
      <main className="grid grid-cols-responsive gap-10 px-20">
        <MoviesController />
      </main>
    </>
  )
}
