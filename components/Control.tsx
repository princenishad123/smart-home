"use client"
import { Button, Card, Switch } from '@heroui/react'
import { Lightbulb } from 'lucide-react'
import React, { useState } from 'react'
import SwitchToggle from './SwitchToggle'


const Control = () => {
      const [isSelected, setIsSelected] = useState(false);
  return (
    <Card>
     
        <Card.Content>
           <div>
            <div className='flex'>
                <Lightbulb/>


<Button onClick={()=>alert()}>Helo</Button>
                <SwitchToggle/>


               
   



            </div>
            
           </div>
        </Card.Content>

 
    </Card>
  )
}

export default Control