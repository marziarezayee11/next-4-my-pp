import React from 'react'
import "../(all)/globals.css"
function layout({music,children,videos,photos}:{
    music:React.ReactNode,
    children:React.ReactNode,
    videos:React.ReactNode,
    photos:React.ReactNode,
}) {
  return (
    <html>
        <body>
            
        
   
    <h1 className='py-2 text-center text-2xl font-bold'>Menu</h1>
     <div className='h-screen w-full grid grid-cols-2 gap-4 mx-auto p-4'>
    <div>{children}</div>
    <div>{music}</div>
    <div>{videos}</div>
    <div>{photos}</div>
    </div>
    </body>
    </html>
  )
}

export default layout