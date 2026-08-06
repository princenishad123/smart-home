import { Lightbulb, Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full px-4 h-14 sticky top-0 backdrop-blur-2xl bg-white/30 flex justify-between items-center border-b border-gray-100'>

        <div>
         <h2 className='text-xl font-semibold'>Smart Home</h2>
        </div>
        <div className='flex gap-4 items-center'>
            {/* <button className='size-8 grid place-content-center rounded-2xl bg-gray-200 cursor-pointer'>
                <Moon size={18} color='gray'/>
            </button> */}
            <div className='size-10 rounded-full overflow-hidden border-2 p-0.5 border-blue-700'>
    <Image
            src={"/image/me.png"}
            alt='profile-image'
            width={40}
            height={40}
            priority
            className='rounded-full'
            />
            </div>
        </div>

    </nav>
  )
}

export default Navbar