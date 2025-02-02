import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Dashicon from "../../assets/Dashboard/DashIcon.svg";
import Homeicon from "../../assets/Dashboard/HomeIcon.svg";
import HomeiconActive from "../../assets/Dashboard/HomeINotActive.svg";
import Abouticon from "../../assets/Dashboard/AboutIcon.svg";
import Serviceicon from "../../assets/Dashboard/ServiceICon.svg";
import Projecticon from "../../assets/Dashboard/ProjectsIcon.svg";
import Contacticon from "../../assets/Dashboard/ContactIcon.svg";
import AboutActive from "../../assets/Dashboard/AboutActive.svg";

const DashLeft: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const currentPathName = location.pathname;
    if (currentPathName === "/") setActiveTab("home");
    else if (currentPathName.startsWith("/about")) setActiveTab("about");
    else if (currentPathName.startsWith("/service")) setActiveTab("service");
    else if (currentPathName.startsWith("/projects")) setActiveTab("projects");
    else if (currentPathName.startsWith("/contact")) setActiveTab("contact");
    else if (currentPathName.startsWith("/articles")) setActiveTab("articles");
  }, [location.pathname]); // Use only location.pathname for better updates

  const handleNavigation = (tab: string, route: string) => {
    setActiveTab(tab); // Update active tab
    navigate(route);
  };

  return (
    <div className=" bg-[#020202] h-[100vh] px-7 py-3 hidden md:flex md:flex-col gap-12 w-[15vw]">
      {/* Dashboard Icon */}
      <div onClick={() => handleNavigation("dashboard", "/")} className=" cursor-pointer">
        <img src={Dashicon} className=" h-20 w-20" />
      </div>

      {/* Navigation Items */}
      <div className=" flex flex-col gap-6 ">
        {/* Home */}
        <div className="flex flex-row items-center gap-3 cursor-pointer" onClick={() => handleNavigation("home", "/")}>
          <img src={activeTab === "home" ? Homeicon : HomeiconActive} className=" h-5 w-5" />
          <span className={`font-poppins text-sm font-medium ${activeTab === "home" ? "text-[#ED2929] font-semibold" : "text-white"}`}>Home</span>
        </div>

        {/* About */}
        <div className="flex flex-row items-center gap-3 cursor-pointer" onClick={() => handleNavigation("about", "/about")}>
          <img src={activeTab === "about" ? AboutActive : Abouticon} className=" h-5 w-5" />
          <span className={`font-poppins text-sm font-medium ${activeTab === "about" ? "text-[#ED2929] font-semibold" : "text-white"}`}>About</span>
        </div>

        {/* Service */}
        <div className="flex flex-row items-center gap-3 cursor-pointer" onClick={() => handleNavigation("service", "/service")}>
          <img src={activeTab === "service" ? Homeicon : Serviceicon} className=" h-5 w-5" />
          <span className={`font-poppins text-sm font-medium ${activeTab === "service" ? "text-[#ED2929] font-semibold" : "text-white"}`}>Service</span>
        </div>

        {/* Projects */}
        <div className="flex flex-row items-center gap-3 cursor-pointer" onClick={() => handleNavigation("projects", "/projects")}>
          <img src={activeTab === "projects" ? Homeicon : Projecticon} className=" h-5 w-5" />
          <span className={`font-poppins text-sm font-medium ${activeTab === "projects" ? "text-[#ED2929] font-semibold" : "text-white"}`}>Projects</span>
        </div>

        {/* Contact */}
        <div className="flex flex-row items-center gap-3 cursor-pointer" onClick={() => handleNavigation("contact", "/contact")}>
          <img src={activeTab === "contact" ? Homeicon : Contacticon} className=" h-5 w-5" />
          <span className={`font-poppins text-sm font-medium ${activeTab === "contact" ? "text-[#ED2929] font-semibold" : "text-white"}`}>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default DashLeft;
