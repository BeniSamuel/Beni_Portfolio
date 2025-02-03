import React from 'react'
import ServiceCard from './ServiceCard';
import serviceTypes from '../../types/Service/ServiceTypes';

interface ServiceWrapperProps {
    services: serviceTypes[];
}

const ServiceWrapper: React.FC<ServiceWrapperProps> = ({ services }) => {
  return (
    <div className=' flex flex-col md:flex-row gap-4 '>
        {
            services.map((service) => {
                return (
                    <ServiceCard key={service.id} image={service.image} category={service.category} description={service.description}/>
                )
            })
        }
    </div>
  )
}

export default ServiceWrapper