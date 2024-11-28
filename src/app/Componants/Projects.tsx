import Link from 'next/link'
import React from 'react'

const Projects = () => {
  
  return (
    <>
       <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 dark:text-white">
       My Projects 
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRmb2xpbyUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"
          alt="Project 1"
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Project 1</h2>
          <p className="text-gray-600 mb-4">
            A brief description of Project 1. Learn more about it here.
          </p>
          <Link href={'https://hackathon1-tawny.vercel.app/'}><button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            View Details
          </button></Link>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://plus.unsplash.com/premium_photo-1661670152522-8db946b83f81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRmb2xpbyUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"
          alt="Project 2"
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Project 2</h2>
          <p className="text-gray-600 mb-4">
            A brief description of Project 2. Learn more about it here.
          </p>
          <Link href={'https://profolio-n2n4.vercel.app/'}><button
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
          >
            View Details
          </button></Link>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://plus.unsplash.com/premium_photo-1669078519237-61fb1374a915?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBvcnRmb2xpbyUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"
          alt="Project 3"
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2 ">Project 3</h2>
          <p className="text-gray-600 mb-4">
            A brief description of Project 3. Learn more about it here.
          </p>
         <Link href="https://milestone5-ashy-five.vercel.app/">
         <button 
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
          >
            View Details
          </button>
         </Link>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRmb2xpbyUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"
          alt="Project 4"
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Project 4</h2>
          <p className="text-gray-600 mb-4">
            A brief description of Project 4. Learn more about it here.
          </p>
          <button
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
 
    </>
  )
}

export default Projects
