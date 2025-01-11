import Image from 'next/image'
import React from 'react'
import img from "@/Images/about.jpg"
import img1 from "@/Images/about2.jpg"
import img2 from "@/Images/map.jpg"

const Card = () => {
  return (
    <>
      <div className='grid grid-cols-[auto,auto,auto,auto] justify-center  text-violet-900 mt-4 mb-12 gap-x-12'>
        <span><Image className='max-h-[133] object-cover' src={img}
         alt='' width={200} height={200}/>
         <h1 className='text-violet-800 font-bold text-xl mt-2'>java</h1></span>
       <span className=''> <Image className='max-h-[133] object-cover rounded-t-md' src={img1} alt='' width={200} height={200}/>
       <h1 className='text-violet-800 font-bold text-xl mt-2'>typescript</h1></span>
       <span> <Image  src={img2} alt='' width={200}  />
       <h1 className='text-violet-800 font-bold text-xl mt-2'>Python</h1>
       <span>$189</span>
       </span>
       <span> <Image  src={img2} alt='' width={200}  />
       <h1 className='text-violet-800 font-bold text-xl mt-2'>Python</h1>
       <span>$189</span>
       </span>
       <span> <Image  src={img2} alt='' width={200}  />
       <h1 className='text-violet-800 font-bold text-xl mt-2'>Python</h1>
       <span>$189</span>
       </span>
       <span> <Image  src={img2} alt='' width={200}  />
       <h1 className='text-violet-800 font-bold text-xl mt-2'>Python</h1>
       <span>$189</span>
       </span>
       <span> <Image  src={img2} alt='' width={200}  />
       <h1 className='text-violet-800 font-bold text-xl mt-2'>Python</h1>
       <span>$189</span>
       </span>
       <span> <Image  src={img2} alt='' width={200}  />
       <h1 className='text-violet-800 font-bold text-xl mt-2'>Python</h1>
       <span>$189</span>
       </span>
      </div>
    </>
  )
}

export default Card
