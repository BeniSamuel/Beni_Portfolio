import React from 'react'
import DashMain from '../../components/Dashboard/DashMain'
import settings from "../../assets/Dashboard/settings.svg";
import whiteMode from "../../assets/Dashboard/whiteMode.svg"
import menu from "../../assets/Dashboard/menu.svg"


const Projects: React.FC = () => {
  return (
    <div>
      <DashMain>
        <div className=" py-16 pl-10 relative">
          <div className=" absolute top-9 left-10 cursor-pointer md:hidden">
            <img src={menu} />
          </div>
          <div className=" absolute top-9 right-10 flex flex-col gap-4">
            <div>
              <img src={settings} className=" h-4 w-4 cursor-pointer" />
            </div>
            <div>
              <img src={whiteMode} className=" h-4 w-4 cursor-pointer" />
            </div>
          </div>
          <div className=" flex flex-col gap-2 py-12 md:py-0">
            <p className=" font-poppins text-sm text-white font-semibold selection:bg-[#ED2929] ">
              Projects
            </p>
            <div className=" flex flex-col gap-1">
              <div className=" bg-[#ED2929] w-16 h-1 rounded-lg" />
              <div className=" bg-[#ED2929] w-10 h-1 rounded-lg" />
            </div>
          </div>
        </div>
      </DashMain>
    </div>
  );
};

export default Projects;