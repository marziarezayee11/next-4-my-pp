"use client"

import { useRouter } from 'next/navigation';
function page() {
   const router = useRouter()
  return (
    <div  className='bg-cyan-100 h-screen w-full flex justify-center items-center flex-col'>
     
           <div className='flex justify-center items-center gap-6 font-black'>
      <button className='' onClick={()=>router.push("/Contact")}>◤</button>
      <button onClick={()=>router.push("/About")}>◥</button>
      </div>
      <div className='flex justify-center items-center gap-6 font-black'>
      <button onClick={()=>router.push("/dashboard")}>◣</button>
      <button onClick={()=>router.push("/Product")}>◢</button>
      </div>
    </div>
  )
}

export default page