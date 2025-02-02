import React, { ReactNode } from 'react'
import DashLeft from './DashLeft'
import DashRight from './DashRight'

type DashMainProps = {
    children: ReactNode;
}

const DashMain: React.FC<DashMainProps> = ({children}) => {
  return (
    <div className=' flex flex-row '>
        <DashLeft />
        <DashRight children={children} />
    </div>
  )
}

export default DashMain