'use client'

import MoviesSearchController from "../controllers/MoviesSearchController";
import { redirect, useSearchParams } from "next/navigation"

export default function Search (){
  const searchParams = useSearchParams()

    const { query } = {
        query: searchParams.get('search')
    }

    if(!query) redirect('/')

  return (
      <>
        <main className="grid grid-cols-responsive gap-10 px-20">  
          <MoviesSearchController search={query} />
        </main>
      </>
    );
}