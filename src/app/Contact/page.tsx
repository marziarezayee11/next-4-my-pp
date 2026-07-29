"use client"
import { Metadata } from 'next'
import { useRouter } from 'next/navigation'
import React from 'react'
 export const metadeta:Metadata = {
  title:"Contact page"
  
}
function page() {
  const router = useRouter()
  return (
    <div  className='bg-cyan-100 h-screen w-full flex justify-center items-center'>
      <button  className="font-bold"onClick={()=>router.back()}>↩</button>
      </div>
  )
}

export default page