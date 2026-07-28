import Link from 'next/link'

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
  return (
    <div className='bg-white/65 py-2.5 px-3 rounded-full fixed mt-4 left-0 right-0 backdrop-blur-2xl'>
      <div className='flex justify-between items-center px-4'>
      <h1 className='font-bold'>NeXt-Js</h1>
      <div className='flex justify-center items-center gap-1.5 font-semibold'>
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