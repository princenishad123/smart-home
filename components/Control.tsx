"use client"
import { Card, Switch } from '@heroui/react'
import { Lightbulb } from 'lucide-react'
import React, { FC, ReactNode, useState } from 'react'

interface ControlInterface {
    name:string;
    icon:ReactNode,
    bgColor:string,
    iconColor:string,
    onChange?:()=>void
}

const Control:FC<ControlInterface> = ({name = "Light",icon = <Lightbulb/>,bgColor = "bg-purple-200",iconColor = "text-purple-600",onChange}) => {
      const [isSelected, setIsSelected] = useState(false);

     const handleChange = ()=>{
        
        if(onChange)
            onChange()

        setIsSelected(!isSelected)

      }
  return (
    <Card>
     
        <Card.Content>
           <div >
            <div className='flex w-full justify-between items-center'>

                <div className={`size-10 p-4 rounded-full ${bgColor} ${iconColor} grid place-content-center`}>
                  {icon}
                </div>
                

        <div className="flex flex-col gap-4">
      <Switch isSelected={isSelected} onChange={handleChange}>
        <Switch.Content>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
         
        </Switch.Content>
      </Switch>
    
    </div>
               
   



            </div>
            

            <h2 className='text-md font-semibold my-2'>{name}</h2>
            <p className='text-xs'>{isSelected ? "ON" :"OFF"}</p>
           </div>
        </Card.Content>

 
    </Card>
  )
}

export default Control