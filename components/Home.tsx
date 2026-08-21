'use client'
import React, { useEffect } from 'react'
import MannerControl from './MannerControl';
import Category from './Category';
import { Card } from '@heroui/react';
import Control from './Control';
import { Fan, Lightbulb } from 'lucide-react';
import socket from '@/config/socket';

const Home = () => {

  const handleDevice = (payload:{id:string,value:boolean})=>{
    const status = payload.value ? "off" :"on"
      socket.emit("led",{status,id:payload.id});
  };

  useEffect(()=>{

 
    socket.on("message",(value)=>{
      console.log(value)
    });


    return ()=>{
      socket.off("message")
    }
  },[])
 
  return (
    <div className='space-y-4'>

      <Card>

     <MannerControl/>

        <Category/>

      </Card>



<div className='grid grid-cols-2 gap-4'>
  <Control
  id='btn1'
  name='Fan'
  icon={<Fan/>}
  iconColor='text-orange-600'
  bgColor={"bg-rose-100"}
  onChange={handleDevice}

  
  />
  <Control
  id='btn2'

  name='Cube Light'
  icon={<Lightbulb/>}
  iconColor='text-blue-600'
  bgColor={"bg-blue-200"}
  onChange={handleDevice}

  
  />
  <Control
  id='btn3'

  name='REd Bulb'
  icon={<Lightbulb/>}
  iconColor='text-blue-600'
  bgColor={"bg-blue-200"}
  onChange={handleDevice}

  
  />

</div>
      

  
     

     <Card>
      <Card.Title>
        Status
      </Card.Title>
      <Card.Content>
         <p className='text-red-500 font-semibold' >Device not connect</p>
      </Card.Content>
      <Card.Description>
       Make sure device always connected .
      </Card.Description>
      
     </Card>


    </div>
  )
}

export default Home