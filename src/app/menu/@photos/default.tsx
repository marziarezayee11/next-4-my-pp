import React from 'react'
import Image from 'next/image'
function PhotosPage() {
  return (
      <div className=' shadow-xl w-full border-[#eee] h-full gap-4 '>
            <h1 className='text-center font-bold p-3'>Photos</h1>
            <div className='flex justify-center items-center gap-3 h-fit'>
            <div
            className='flex justify-center items-center gap-3 '>
            <Image 
            className='rounded-xl'
            src="/images/shirt1.jpg"
            alt='flower'
            height={150}
            width={180}/>
            </div>
      <div
            className='flex justify-center items-center  '>
            <Image 
             className='rounded-xl'
            src="/images/red1.jpg"
            alt='flower'
            height={150}
            width={170}/>
            </div>
              <div
            className='flex justify-center items-center  '>
            <Image 
             className='rounded-xl'
            src="/images/black7.jpg"
            alt='flower'
            height={150}
            width={160}/>
            </div>
            </div>
    
        </div>
  )
}

export default PhotosPage