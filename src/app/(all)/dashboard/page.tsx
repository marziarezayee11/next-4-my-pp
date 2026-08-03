"use client"
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { useState } from "react"

function Sidebar() {
  const router = useRouter()
    const [Open,SetOpen] = useState(false);
  return (
    <div className=" flex justify-center items-center bg-cyan-100 h-screen w-full">
      <div>
        <button  className="font-bold"onClick={()=>SetOpen(!Open)}> dashboard{Open ? "▲":"▼"}</button>
        {Open && ( <div className={`ml-5`}>
            <p><Link href="/dashboard/users">Users
            </Link></p><p>
              <Link href="/dashboard/products">Products</Link></p>
              <p>
                <Link href="/dashboard/orders">
                Orders</Link>
              </p>

        </div>

        )}
        </div>
      
    </div>
  )
}

export default Sidebar