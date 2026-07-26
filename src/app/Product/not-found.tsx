"use client"
import { usePathname } from 'next/navigation'

function Nonf() {
   const pathn = usePathname();
   const id = pathn.split("/")[2]
  return(
    <div className='h-screen w-full flex justify-center items-center font-bold bg-linear-100 from-[#cdf1f1] to-[#aed3e1] via-[#c7ddeb]'>
<h1 className='text-4xl'>Sorry We Have,t any product With this {id} id🖐️</h1>
<h2>pleas try agin</h2>
    </div>
  )
}

export default Nonf