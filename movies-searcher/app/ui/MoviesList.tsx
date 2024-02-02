import { useSearchParams, useRouter } from "next/navigation";
import { type Movies } from "../lib/definitions";
import Movie from'./moviesList/Movie'

export default function MoviesList (
    { movies, maxPages, page }: { movies: Movies, maxPages: number, page: number }
){
    const searchParams = useSearchParams()
    const { replace } = useRouter()

    const handleChangePage = (newPage: number) => {
        'use client'
        console.log(newPage)
        const params = new URLSearchParams(searchParams)
        params.set('page', newPage.toString())
        console.log(params.toString())

        replace(`/search?${params.toString()}`)
    }

    return(
        <>
            <div className="grid grid-cols-responsive gap-10 px-20">
                {
                    movies.map(movie => (
                        <Movie key={movie.id} { ...movie}/>
                    ))
                }
            </div>

            <div className="flex gap-3 justify-center items-center my-8">

                <button className="p-2 border rounded-sm"
                    onClick={() => handleChangePage(1)} 
                >
                    1
                </button>

                <button className="p-2 border rounded-sm" 
                    disabled={page === 1} 
                    onClick={() => handleChangePage(page - 1)} 
                >-
                </button>

                {page}

                <button className="p-2 border rounded-sm" 
                disabled={page === maxPages } 
                onClick={() => handleChangePage(page + 1)} 
                >+
                </button>

                <button className="p-2 border rounded-sm"
                    onClick={() => handleChangePage(maxPages)} 
                >
                    {maxPages}
                </button>
            </div>
        </>
    )
}