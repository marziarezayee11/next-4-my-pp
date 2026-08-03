"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

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
    },
    {id:5,
      name:"Dashboard",
      link:"/dashboard",
    },
]
function Navbar() {
  const router = useRouter()
  return (
    <div className='bg-white/65 py-2.5 px-3 rounded-full fixed mt-4 left-0 right-0 backdrop-blur-2xl'>
      <div className='flex justify-between items-center'>
       
      <div className='flex justify-center items-center gap-4'>
        <button onClick={()=>router.back()} className='font-black'>⟪</button>
        <button onClick={()=>router.refresh()} className='font-black'>↻</button>
         <button  className='font-black' onClick={()=>router.replace('/Product')}>⟫</button>
      <h1 className='font-bold'>NeXt-Js</h1>
      </div>
      <div className='flex justify-center items-center gap-1.5 font-semibold mr-5'>
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