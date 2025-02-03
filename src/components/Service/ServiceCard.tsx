import React from 'react'
import serviceTypes from '../../types/Service/ServiceTypes'

const ServiceCard: React.FC<serviceTypes> = ( props ) => {
  return (
    <div className=' flex flex-col gap-3 items-center bg-[#171717] py-8 md:py-6 justify-center px-4 rounded-lg border-[#2F2C2C] border-2 md:w-[27rem] '>
        <img src={props.image} className=' h-7 w-7 '/>
        <p className=' font-poppins text-sm text-white '>{props.category}</p>
        <p className=' font-poppins text-[0.77rem] text-white text-center leading-7 '>{props.description}</p>
    </div>
  )
}

export default ServiceCard