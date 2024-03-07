'use client'

import Link from 'next/link'
import { SEARCH_PARAMS } from '../../lib/constants'
import { useSearchParams } from 'next/navigation'

interface Props {
  maxPages: number
  search: string
}

const PageSelector: React.FC<Props> = ({ maxPages, search }) => {
  const searchParams = useSearchParams()

  const { page } = {
    page: Number(searchParams.get(SEARCH_PARAMS.PAGE)) ?? 1
  }

  return (
        <div className="flex gap-3 justify-center items-center py-8 mt-8 bg-[#ededed]">

                {
                    page > 2 &&
                    <Link
                        className="py-2 px-4 border rounded-md hover:bg-blue-200"
                        href={`/search?search=${search}&page=1`}
                    >
                        1
                    </Link>
                }

                {
                    page !== 1 &&
                    <Link
                        className="p-2 w-32 items-center  justify-center flex gap-3 border rounded-md hover:bg-blue-200"
                        href={`/search?search=${search}&page=${page - 1}`}
                    >
                        <span>{'<'}</span>
                        <span>Previous</span>
                    </Link>
                }

                <div className="cursor-default min-w-[40px] flex justify-center p-2 border-2 border-blue-400 rounded-md">
                    {page}
                </div>

                {
                    page !== maxPages &&
                    <Link
                        className='p-2 w-32 items-center  justify-center flex gap-3 border rounded-md hover:bg-blue-200'
                        href={`/search?search=${search}&page=${page + 1}`}
                    >
                        <span>Next</span>
                        <span>{'>'}</span>
                    </Link>
                }

                {
                    page !== maxPages &&
                    <Link
                        className="py-2 px-3 border rounded-md hover:bg-blue-200"
                        href={`/search?search=${search}&page=${maxPages}`}
                    >
                        {maxPages}
                    </Link>
                }

            </div>
  )
}

export default PageSelector
