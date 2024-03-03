'use client'

import { SEARCH_PARAMS } from '@/app/lib/constants'
import { useSearchParams, useRouter } from 'next/navigation'

interface Props {
  maxPages: number
}

const PageSelector: React.FC<Props> = ({ maxPages }) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const { page } = {
    page: Number(searchParams.get(SEARCH_PARAMS.PAGE)) ?? 1
  }

  const handleChangePage = (newPage: number): void => {
    const params = new URLSearchParams(searchParams)
    params.set(SEARCH_PARAMS.PAGE, newPage.toString())

    replace(`/search?${params.toString()}`)
  }

  return (
        <div className="flex gap-3 justify-center items-center py-8 mt-8 bg-[#ededed]">

                {
                    (page !== 1 && page !== 2) &&
                    <button
                        className="py-2 px-4 border rounded-md hover:bg-blue-200"
                        onClick={() => { handleChangePage(1) }}
                    >
                        1
                    </button>
                }

                {
                    page !== 1 &&
                    <button
                        className="p-2 w-32 items-center  justify-center flex gap-3 border rounded-md hover:bg-blue-200"
                        disabled={ page === 1 }
                        onClick={() => { handleChangePage(page - 1) }}
                    >
                        <span>{'<'}</span>
                        <span>Previous</span>
                    </button>
                }

                <div className="cursor-default min-w-[40px] flex justify-center p-2 border-2 border-blue-400 rounded-md">
                    {page}
                </div>

                {
                    page !== maxPages &&
                    <button
                        className="p-2 w-32 items-center  justify-center flex gap-3 border rounded-md hover:bg-blue-200"
                        disabled={ page === maxPages }
                        onClick={() => { handleChangePage(page + 1) }}
                    >
                        <span>Next</span>
                        <span>{'>'}</span>
                    </button>
                }

                {
                    page !== maxPages &&
                    <button
                        className="py-2 px-3 border rounded-md hover:bg-blue-200"
                        onClick={() => { handleChangePage(maxPages) }}
                    >
                        {maxPages}
                    </button>
                }

            </div>
  )
}

export default PageSelector
