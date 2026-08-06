'use client'
import React from 'react'
import MannerControl from './MannerControl';
import Category from './Category';
import { Card } from '@heroui/react';
import Control from './Control';
import { Fan, Lightbulb } from 'lucide-react';

const Home = () => {

  const handleDevice = ()=>{
       alert()
  }
 
  return (
    <div className='space-y-4'>

      <Card>

     <MannerControl/>

        <Category/>

      </Card>



<div className='grid grid-cols-2 gap-4'>
  <Control
  name='Fan'
  icon={<Fan/>}
  iconColor='text-orange-600'
  bgColor={"bg-rose-100"}
  onChange={handleDevice}

  
  />
  <Control
  name='Cube Light'
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