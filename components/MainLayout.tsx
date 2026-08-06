import { ChildrenInterface } from '@/types/ChildrenInterface'
import React from 'react'
import Navbar from './Navbar'

const MainLayout:React.FC<ChildrenInterface> = ({children}) => {
  return (
    <div className='max-w-md relative h-screen overflow-hidden border xl:border-gray-800 mx-auto'>
       <Navbar/>

       <main className='p-4'>
        {children}
       </main>
        
    </div>
  )
}

export default MainLayout