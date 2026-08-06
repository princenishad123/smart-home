import React from 'react'
import MannerControl from './MannerControl';
import Category from './Category';
import { Card } from '@heroui/react';
import Control from './Control';

const Home = () => {
 
  return (
    <div className='space-y-4'>

      <Card>

     <MannerControl/>

        <Category/>

      </Card>


      <Control/>

  
     


    </div>
  )
}

export default Home