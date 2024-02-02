'use client'

import MoviesSearchController from "../controllers/MoviesSearchController";
import { redirect, useSearchParams } from "next/navigation"

export default function Search (){
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)

    const { query, page } = {
        query: searchParams.get('search'),
        page: searchParams.get('page')
    }

    if(!query) redirect('/')
    if(!page) params.set('page', '1')

  return (
        <main>  
          <MoviesSearchController search={query} />
        </main>
    );
}