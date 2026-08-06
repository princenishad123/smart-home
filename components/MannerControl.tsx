"use client"
import moment from 'moment';
import React, { useEffect, useState } from 'react'

type mannerType = "morning" | "evening" | "afternoon";


const MannerControl = () => {
    const [wish,setWish] = useState<mannerType>("morning");


    
    useEffect(()=>{


        const timer = setInterval(()=>{
           const date = new Date(); 

           const hour = date.getHours();

           if(hour < 12){
            setWish("morning")
           }else if(hour >= 12){
             setWish("afternoon")
           }else if(hour >= 16){
            setWish("evening")
           };


           
            


        },1000)



        return ()=>clearInterval(timer)

        



    },[])


  return (
    <div>
        <h2 className='text-xl text-gray-600 font-semibold'>Hi, Good {wish}</h2>
        <p className='text-sm'>{moment().format('LL')}</p>
    </div>
  )
}

export default MannerControl