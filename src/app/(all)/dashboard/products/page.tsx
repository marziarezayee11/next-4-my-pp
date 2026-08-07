import React from 'react'
import Image from 'next/image'
function page() {
  return (
    <div className="h-screen w-full bg-linear-100 from-[#cdf1f1] to-[#aed3e1] via-[#c7ddeb] flex justify-center items-center gap-5">
   
      <div>
      <div><Image
      className='rounded-3xl' src="/images/red3.jpg" alt='foot' 
      height={250}
      width={250}/></div>
        </div>
          <div>
      <div><Image
       className='rounded-3xl'
      src="/images/red4.jpg" alt='foot' 
      height={300}
      width={300}/></div>
        </div>
          <div>
      <div><Image
       className='rounded-3xl'
      src="/images/red5.jpg" alt='foot' 
      height={250}
      width={250}/></div>
        </div>
        </div>
  )
}

export default page