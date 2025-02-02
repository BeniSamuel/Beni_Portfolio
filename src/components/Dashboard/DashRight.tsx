import React, { ReactNode } from 'react'

type DashRightProps = {
    children: ReactNode;
}

const DashRight: React.FC<DashRightProps> = ({children}) => {
  return (
    <div className=' bg-[#020202] h-[100vh] w-[85vw]'>
        {children}
    </div>
  )
}

export default DashRight