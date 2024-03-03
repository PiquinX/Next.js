const MoviesListSkeleton = (): JSX.Element => {
  return (
    <>
        <div className="mb-2 w-[250px] h-[24px] bg-gray-300 rounded-md" />
        <div className="grid rounded-lg bg-white grid-cols-responsive gap-10 px-20 py-16">
            {
                Array.apply(null, Array(12)).map((x, index) => (
                    <div key={index} className='max-w-[500px] bg-gray-300 rounded-md'>
                        <div className="flex flex-col py-4 px-6 gap-5 border rounded-md relative">
                            <div className="w-1/2 h-[24px] bg-white rounded-md"></div>
                            <div
                                className='h-96 bg-white rounded-md'
                            />
                            <div className="flex justify-between h-[24px]">
                                <p className="w-20 bg-white rounded-md"></p>
                                <p className="w-20 bg-white rounded-md"></p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default MoviesListSkeleton
