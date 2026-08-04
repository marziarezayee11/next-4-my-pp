import React from 'react'

function MenuPage() {
  return (
      <div className=' shadow-xl w-full  border-[#eee] h-full'>
        <h1 className=' text-center font-bold'>Videos</h1>
        <div className='flex justify-center items-center gap-3'>
          <div>
            <video
            className='h-60'
            controls width={260}>
              <source src="/videos/de1.mp4"
              type='video/mp4'/>
              error
           </video>
          </div>
             <div>
            <video
            className='h-44'
            controls width={250}>
              <source src="/videos/de3.mp4"
              type='video/mp4'/>
              error
           </video>
          </div>
             <div>
            <video
            className='h-56'
            controls width={250}>
              <source src="/videos/de2.mp4"
              type='video/mp4'/>
              error
           </video>
          </div>
          
        </div>
    </div>
  )
}

export default MenuPage