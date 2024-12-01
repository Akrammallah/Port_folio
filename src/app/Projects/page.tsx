import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Projects = () => {
  
  return (
    <>
       <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 dark:text-white">
       My Projects 
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-500 shadow-gray-500">
        <Image
          src="https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=800"
          
          alt="Project 1"
          width={600} height={600}
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
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-500 shadow-gray-500">
        <Image
          src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800"
          width={600} height={600}
          
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
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-500 shadow-gray-500">
        <Image
          src="https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={600} height={600}
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
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-500 shadow-gray-500">
        <Image
          src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800"
          width={600} height={600}
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
