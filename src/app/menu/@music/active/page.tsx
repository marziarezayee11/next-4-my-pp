import React from 'react'

function page() {
  return (
        <div className='w-full border-[#eee] h-full shadow-xl'>
        <h1 className='text-center font-bold p-3'>music</h1>
        <div className='flex justify-center items-center gap-4 flex-wrap'>
          
            <div>
          <audio controls >
            <source src='/music/ev4.mp3'/> error
          </audio>
          </div>
            <div>
          <audio controls >
            <source src='/music/ev3.mp3'/> error
          </audio>
          </div>
             <div>
          <audio controls >
            <source src='/music/ev1.mp3'/> error
          </audio>
          </div>
          </div>
        

         
    </div>
  )
}

export default page