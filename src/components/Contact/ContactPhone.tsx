import React from 'react'
import phone from "../../assets/Contact/Phone.svg";

const ContactPhone: React.FC = () => {
  return (
    <div className=' flex flex-col items-center justify-center '>
        <img src={phone}/>
    </div>
  )
}

export default ContactPhone