import { Outlet, Link } from 'react-router-dom';

export default function BaseLayout() {
  return(
    <>
      <div className="flex space-x-0 space-y-5 lg:space-y-0 lg:space-x-20 justify-center flex-col lg:flex-row items-center min-h-screen h-screen bg-gradient-to-br from-red-300 from-50% via-gray-100 via-50%">
        <div className="text-6xl">
          Shorten URL
        </div>
        <div className="absolute top-0 left-0 mr-4 mt-4">
          <Link to="/" className=" text-black hover:text-blue-700 font-bold text-xl">Home</Link>
        </div>
        <div className='h-1/2 w-3/4 sm:w-1/2 lg:w-3/12 sm:h-1/3 flex'>
          <div className="flex w-full h-full bg-neutral-50 drop-shadow-2xl rounded-2xl items-center justify-center space-y-1">
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  )
}