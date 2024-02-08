const ListOfBooksSkeleton = (): JSX.Element => {
  return (
    <div className='flex flex-col gap-8'>
      <div className="flex flex-col gap-4">
        <div className="w-[270px] h-[36px] bg-slate-400 rounded-md" />

        <div className="w-[250px] h-[28px] bg-slate-400 rounded-md" />
      </div>
      <div className="flex">
        <div className="w-[180px] h-[28px] bg-slate-400 rounded-md" />

      </div>
      <div className='grid w-full grid-cols-responsiveCols gap-10'>
        {
          Array.apply(null, Array(12)).map((x, index) => (
              <div
                className='h-96 w-64 bg-slate-400 rounded-md'
                key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default ListOfBooksSkeleton
