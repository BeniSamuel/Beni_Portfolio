import mobile from "../assets/Service/mobile.svg";
import web from "../assets/Service/web.svg";
import grDesign from "../assets/Service/graphicDesign.svg";
import serviceTypes from "../types/Service/ServiceTypes";

const services: serviceTypes[] = [
  {
    id: 1,
    image: mobile,
    category: "Mobile Developer",
    description: `I design and develop mobile apps with a 
        strong focus on sleek, visually appealing 
        interfaces and seamless user experiences.`,
  },
  {
    id: 2,
    image: web,
    category: "Web Developer",
    description: `I craft innovative and visually captivating 
        websites, pairing creative front-end designs 
        with robust, secure back-end solutions.`,
  },
  {
    id: 3,
    image: grDesign,
    category: "Graphic Designer",
    description: `I create stunning, impactful designs that 
        blend creativity with precision, bringing 
        concepts to life with vibrant visuals and 
        thoughtful aesthetics.`,
  },
];

export default services;
