import { Suspense } from 'react'
import ListOfBooksSkeleton from './ui/ListOfBooks/ListOfBooksSkeleton'
import ReadingList from './ui/ReadingList'
import FetchedBooksController from './controllers/FetchedBooksController'

async function Home (): Promise<JSX.Element> {
  return (
    <main className="flex min-h-screen gap-10 p-16 bg-[#111]">
      <div className='w-[65%]'>
        <Suspense fallback={<ListOfBooksSkeleton />}>
          <FetchedBooksController />
        </Suspense>
      </div>

      <div className='w-[35%]'>
        <ReadingList />
      </div>
    </main>
  )
}

export default Home
