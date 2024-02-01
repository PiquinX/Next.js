'use client'

import { useSearchParams, usePathname, useRouter } from "next/navigation"

export default function Searcher (){
    const searchParams = useSearchParams()
    const { replace } = useRouter()

    const handleChange = (search: string) => {
        const params = new URLSearchParams(searchParams)
        if(search){
            params.set('search', search)
        } else {
            params.delete('search')
        }

        replace(`search?${params.toString()}`)
    }
    return(
        <input 
            onChange={(event) => handleChange(event.target.value)}
            placeholder="Search a movie"
            className="py-1 px-2 focus:outline-2 outline-1 outline rounded-sm duration-75"
            defaultValue={searchParams.get('search') ?? ''} 
        />
    )
}