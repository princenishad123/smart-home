import { ChildrenInterface } from '@/types/ChildrenInterface'
import React from 'react'
import Navbar from './Navbar'

const MainLayout:React.FC<ChildrenInterface> = ({children}) => {
  return (
    <div className='max-w-md relative h-screen overflow-hidden mx-auto'>
       <Navbar/>

       <main className='p-4'>
        {children}
       </main>
        
    </div>
  )
}

export default MainLayout