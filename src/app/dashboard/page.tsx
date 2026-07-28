"use client"

import Link from "next/link";
import { useState } from "react"

function Sidebar() {
    const [Open,SetOpen] = useState(false);
  return (
    <div className="mt-12">
        <button onClick={()=>SetOpen(!Open)}>{Open ? "▴":"▾"}</button>
        {Open && ( <div className={`ml-5`}>
            <p><Link href="/dashboard/users">Users
            </Link></p><p>
              <Link href="/dashboard/products">Products</Link></p>
              <p>
                <Link href="/dashboard/orderds">
                Orderds</Link>
              </p>
        </div>

        )}
    </div>
  )
}

export default Sidebar