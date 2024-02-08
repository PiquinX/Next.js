import { type Movie as MovieType } from '@/app/lib/definitions'
import Link from 'next/link'

export const Movie: React.FC<MovieType> = ({ title, img, type, year, id }) => {
  return (
        <Link
            href={`/info/${id}`}
            className="max-w-[500px]"
        >
            <div className="flex flex-col py-4 px-6 gap-5 border rounded-md relative duration-100 hover:scale-105">
                <h3 className="truncate hover:underline" >{title}</h3>
                <img
                    src={img}
                    alt={`${title} poster`}
                    width={1000}
                    height={760}
                    className='h-96'
                />
                <div className="flex justify-between">
                    <p>{type}</p>
                    <p>{year}</p>
                </div>
            </div>
        </Link>
  )
}

export default Movie
