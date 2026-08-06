import { Accessibility, Fan, Lightbulb, Tv, Wifi } from 'lucide-react'
import React from 'react'

const Category = () => {

    const categories = [
        {
            id:1,
            name:"Front door",
            color:"text-rose-500",
            bg:"bg-rose-100",
            icon:<Lightbulb/>
        },
        {
            id:2,
            name:"Fan",
            color:"text-green-500",
            bg:"bg-green-100",
            icon:<Fan/>
        },
        {
            id:3,
            name:"Tv",
            color:"text-purple-500",
            bg:"bg-purple-100",
            icon:<Tv/>
        },
        {
            id:4,
            name:"Wi-fi",
            color:"text-blue-500",
            bg:"bg-blue-100",
            icon:<Wifi/>
        },
    ]
  
  return (
    <div className=''>
        <h2 className='my-4 text-md font-semibold'>Sweet home</h2>

        <div className='flex justify-between '>


            {
                categories.map((category)=>(
                    <div key={category.id} className='w-22 flex items-center flex-col'>


<div className={`size-12 rounded-full ${category.bg}  grid place-content-center ${category.color}`}>
{category.icon}
</div>
                
                <h3 className='text-sm font-semibold'>{category.name}</h3>
            </div>
                ))
            }







        </div>
    </div>
  )
}

export default Category