import React from 'react'
import { Typewriter } from 'react-simple-typewriter';

const DynamicText: React.FC = () => {
  return (
    <div>
        <Typewriter 
            words={[
                "Backend Developer",
                "Frontend Developer",
                "Mobile Developer",
                "Desktop App Developer",
                "Into Cybersecurity",
                "Embedded Designer"  
            ]}
            loop = {Infinity}
            cursor
            cursorColor='#ED2929'
            cursorStyle="|"
            cursorBlinking={false}
            typeSpeed={150}
            deleteSpeed={150}
            delaySpeed={1000}
        />
    </div>
  )
}

export default DynamicText