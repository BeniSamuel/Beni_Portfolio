import React from 'react'

const ContactEmail: React.FC = () => {
  return (
    <div className=' flex flex-row'>
        <div className=' w-1/2'></div>
        <form className=' flex flex-col gap-4 w-1/2 pr-10'>
            <input type="email" placeholder='Email' className=' bg-[#171717] placeholder:font-poppins placeholder:text-sm placeholder:text-white py-[0.92rem] px-4 w-full rounded-lg border-[#2F2C2C] border-2 focus:border-[#ED2929] outline-none text-white font-poppins text-sm focus:bg-[#3c2323]'/>
            <textarea className=' bg-[#171717] placeholder:font-poppins placeholder:text-sm  placeholder:text-white py-[0.92rem] px-4 rounded-lg border-[#2F2C2C] border-2 focus:border-[#ED2929] outline-none text-white font-poppins text-sm focus:bg-[#3c2323] leading-7 ' placeholder='Description' rows={5} />
            <input type="submit" value="Submit" className=' py-[0.92rem] w-full bg-[#ED2929] font-poppins font-medium text-white text-sm rounded-lg '/>
        </form>
    </div>
  )
}

export default ContactEmail