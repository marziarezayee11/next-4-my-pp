import React from 'react'
import Image from 'next/image'
function VideosPage() {
  return (
  <div className=' shadow-xl w-full border-[#eee] h-full'>
        <h1 className='text-center font-black'>Menu</h1>
        <div className='flex justify-center items-center gap-3'>
          <div>
            <Image 
            className="rounded-xl"
            src="/images/red3.jpg"
            alt='flower'
          height={220} 
        width={150} />
          </div>
             <div>
            <Image
              className="rounded-xl"
             src="/images/red5.jpg"
            alt='flower'
          height={210} 
        width={160} />
          </div>
             <div>
            <Image 
              className="rounded-xl"
             src="/images/red4.jpg"
            alt='flower'
          height={200} 
        width={170} />
          </div>
        </div>
    </div>
  )
}

export default VideosPage