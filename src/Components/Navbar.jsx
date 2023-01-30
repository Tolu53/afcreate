import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-full sm:w-full bg-green-700'>
        <div className='flex flex-col w-full h-auto '>
            <div className='flex  justify-center mb-2 bg-black'>
                <h1 className='text-4xl text-white justify-center'>AF Create</h1>
            </div>
            <div className='flex mx-auto justify-center w-full items-center mb-2 bg-red-500'>
             <ul className='flex'>
                <li className='text-lg text-white hover:scale-105 mr-16 cursor-pointer '>Art</li>
                <li className='text-lg text-white hover:scale-105 mr-16 cursor-pointer'>Blog</li>
                <li className='text-lg text-white hover:scale-105 cursor-pointer  '>Film</li>
             </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar