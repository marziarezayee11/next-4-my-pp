import Link from 'next/link'
import React from 'react'

const Nav:NavB[] = [
    {
        id:1,
        name:"Home",
        link:"/",
    },
     {
        id:2,
        name:"About",
        link:"/About",
    },
     {
        id:3,
        name:"Contact",
        link:"/Contact",
    },
     {
        id:4,
        name:"Product",
        link:"/Product",
    }
]
function Navbar() {
  return (
    <div className='bg-cyan-300 py-2.5 px-3 rounded-full fixed mt-4 left-0 right-0 backdrop-blur-3xl'>
      <div className='flex justify-between items-center px-4'>
      <h1>NeXt-Js</h1>
      <div className='flex justify-center items-center gap-1.5'>
{Nav.map((link)=>(
 <Link key={link.id} href={link.link}>
  {link.name}
  </Link>
))}
</div>
</div>
    </div>
  )
}

export default Navbar