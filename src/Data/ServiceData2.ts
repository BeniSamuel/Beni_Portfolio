import desktopApp from "../assets/Service/desktop.svg";
import embedded from "../assets/Service/embedded.svg";
import cyber from "../assets/Service/cyberGuarding.svg";
import serviceTypes from "../types/Service/ServiceTypes";

const services: serviceTypes[]  = [
  {
    id: 4,
    image: desktopApp,
    category: "Desktop Developer",
    description: `I build powerful desktop apps with seamless 
        functionality using Electron, delivering a 
        smooth and intuitive user experience across 
        platforms.`,
  },
  {
    id: 5,
    image: embedded,
    category: "Embedded Dev",
    description: `I design cutting-edge embedded systems for 
        IoT, creating smart, efficient solutions that 
        connect and enhance the digital world.`,
  },
  {
    id: 6,
    image: cyber,
    category: "Cyber Guard ",
    description: `I specialize in cyber security, crafting robust 
        defenses to protect digital assets and ensure 
        a secure, threat-free online environment.`,
  },
];

export default services;