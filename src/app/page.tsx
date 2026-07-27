import React from 'react'

 async function page() {
  await new Promise((resolve)=>setTimeout(resolve,3000))
  return (

    <div className='bg-cyan-100 h-screen w-full flex justify-center items-center'>
      <h1 className='font-bold '>Hi There welcome To My Page👋</h1>
    </div>
  )
}

export default page