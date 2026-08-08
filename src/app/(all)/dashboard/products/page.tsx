import React from 'react'
import Image from 'next/image'
function page() {
  return (
    <div className="h-full w-full bg-linear-100 from-[#cdf1f1] to-[#aed3e1] via-[#c7ddeb] gap-5">
   <h1 className='text-center font-extrabold mt-28 mb-4 text-2xl'> Photos</h1>
      <div className=' flex justify-center items-center gap-5'>
      <Image
      className='rounded-3xl' src="/images/red3.jpg" alt='foot' 
      height={250}
      width={250}/>
      
          
      <Image
       className='rounded-3xl'
      src="/images/red4.jpg" alt='foot' 
      height={300}
      width={300}/>
        
      <Image
       className='rounded-3xl'
      src="/images/red5.jpg" alt='foot' 
      height={250}
      width={250}/>
      </div>
        
           <div className='mt-10'>
         <h1 className=' text-center font-bold text-2xl'>Videos</h1>
        <div className='flex justify-center items-center gap-3'>
          <div>
            <video
            className='h-96'
            controls width={300}>
              <source src="/videos/de1.mp4"
              type='video/mp4'/>
              error
           </video>
          </div>
             <div>
            <video
            className='h-80 '
            controls width={300}>
              <source src="/videos/de3.mp4"
              type='video/mp4'/>
              error
           </video>
          </div>
             <div>
            <video
            className='h-96'
            controls width={300}>
              <source src="/videos/de2.mp4"
              type='video/mp4'/>
              error
           </video>
          </div>
          
        </div>
    </div>
        </div>
        
  )
}

export default page