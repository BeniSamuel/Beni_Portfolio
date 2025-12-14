import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import serviceTypes from "../../types/Service/ServiceTypes";

interface ServiceWrapperProps {
  services: serviceTypes[];
}

const ServiceWrapper: React.FC<ServiceWrapperProps> = ({ services }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {services.map((service) => {
        return (
          <ServiceCard
            key={service.id}
            image={service.image}
            category={service.category}
            description={service.description}
          />
        );
      })}
    </motion.div>
  );
};

export default ServiceWrapper;
