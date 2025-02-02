import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Dashicon from "../../assets/Dashboard/DashIcon.svg";
import Homeicon from "../../assets/Dashboard/HomeIcon.svg";
import HomeiconAnctive from "../../assets/Dashboard/HomeINotActive.svg";
import Abouticon from "../../assets/Dashboard/AboutIcon.svg";
import Serviceicon from "../../assets/Dashboard/ServiceICon.svg";
import Projecticon from "../../assets/Dashboard/ProjectsIcon.svg";
import Contacticon from "../../assets/Dashboard/ContactIcon.svg";

const DashLeft: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const currentPathName = location.pathname;
    if (currentPathName.includes("/")) setActiveTab("home");
    else if (currentPathName.includes("/about")) setActiveTab("about");
    else if (currentPathName.includes("/service")) setActiveTab("service");
    else if (currentPathName.includes("/projects")) setActiveTab("projects");
    else if (currentPathName.includes("/contact")) setActiveTab("contact");
    else if (currentPathName.includes("/articles")) setActiveTab("articles");
  });

  return (
    <div className=" bg-[#020202] h-[100vh] px-7 py-3 flex flex-col gap-12 w-[15vw]">
      <div>
        <img src={Dashicon} className=" h-20 w-20" />
      </div>

      <div className=" flex flex-col gap-6 ">
        <div className=" flex flex-row items-center gap-3 ">
          <div>
            {activeTab === "home" ? (
              <img src={Homeicon} className=" h-5 w-5" />
            ) : (
              <img src={HomeiconAnctive} />
            )}
          </div>
          <div
            className={` font-poppins text-sm font-medium ${
              activeTab === "home"
                ? " text-[#ED2929] font-semibold"
                : " text-white"
            }`}
          >
            Home
          </div>
        </div>
        <div className=" flex flex-row items-center gap-3 ">
          <div>
            {activeTab === "about" ? (
              <img src={Homeicon} className=" h-5 w-5" />
            ) : (
              <img src={Abouticon} className=" h-5 w-5 " />
            )}
          </div>
          <div
            className={` font-poppins text-sm font-medium ${
              activeTab === "about"
                ? " text-[#ED2929] font-semibold"
                : " text-white"
            }`}
          >
            about
          </div>
        </div>
        <div className=" flex flex-row gap-3 ">
          <div>
            {activeTab === "service" ? (
              <img src={Homeicon} className=" h-5 w-5" />
            ) : (
              <img src={Serviceicon} className=" h-5 w-5 " />
            )}
          </div>
          <div
            className={` font-poppins text-sm font-medium ${
              activeTab === "service"
                ? " text-[#ED2929] font-semibold"
                : " text-white"
            }`}
          >
            Service
          </div>
        </div>
        <div className=" flex flex-row gap-3 ">
          <div>
            {activeTab === "projects" ? (
              <img src={Homeicon} className=" h-5 w-5" />
            ) : (
              <img src={Projecticon} className=" h-5 w-5" />
            )}
          </div>
          <div
            className={` font-poppins text-sm font-medium ${
              activeTab === "projects"
                ? " text-[#ED2929] font-semibold"
                : " text-white"
            }`}
          >
            Projects
          </div>
        </div>
        <div className=" flex flex-row gap-3 ">
          <div>
            {activeTab === "contact" ? (
              <img src={Homeicon} className=" h-5 w-5" />
            ) : (
              <img src={Contacticon} className=" h-5 w-5" />
            )}
          </div>
          <div
            className={` font-poppins text-sm font-medium ${
              activeTab === "contact"
                ? " text-[#ED2929] font-semibold"
                : " text-white"
            }`}
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashLeft;
