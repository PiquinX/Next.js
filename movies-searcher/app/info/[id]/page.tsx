import { getMovie } from '@/app/lib/actions'
import { notFound } from 'next/navigation'

interface Props {
  params: { id: string }
}

const Page: React.FC<Props> = async ({ params }: { params: { id: string } }) => {
  const id = params.id
  const movie = await getMovie({ id })

  if (movie === false) notFound()

  return (
        <div className="flex flex-col items-center justify-center gap-14">
            <h3 className="text-4xl" >{movie.title}</h3>
            <div className="flex flex-col items-center justify-center gap-5 w-[30%]">
                <img
                    src={movie.img}
                    alt={`${movie.title} poster`}
                    className='w-full'
                />
                <div className="flex justify-between w-full">
                    <p>{movie.type}</p>
                    <p>{movie.year}</p>
                </div>
            </div>
        </div>
  )
}

export default Page
