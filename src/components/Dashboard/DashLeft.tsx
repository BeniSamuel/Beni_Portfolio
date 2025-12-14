import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useThemeColors } from "../../hooks/useThemeColors";
import Dashicon from "../../assets/Dashboard/DashIcon.svg";
import Homeicon from "../../assets/Dashboard/HomeIcon.svg";
import HomeiconActive from "../../assets/Dashboard/HomeINotActive.svg";
import Abouticon from "../../assets/Dashboard/AboutIcon.svg";
import Serviceicon from "../../assets/Dashboard/ServiceIcon.svg";
import Projecticon from "../../assets/Dashboard/ProjectsIcon.svg";
import Contacticon from "../../assets/Dashboard/ContactIcon.svg";
import AboutActive from "../../assets/Dashboard/AboutActive.svg";
import ServiceActive from "../../assets/Dashboard/ServiceActive.svg";
import ProjectActive from "../../assets/Dashboard/ProjectsActive.svg";
import ContactActive from "../../assets/Dashboard/ContactActive.svg";

const DashLeft: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");
  const { themeColor } = useThemeColors();

  // Convert hex color to CSS filter for SVG coloring
  // This function creates a CSS filter that changes the icon color to match the theme
  const getColorFilter = (hex: string): string => {
    // Pre-calculated filters for each theme color for better accuracy
    const colorFilters: Record<string, string> = {
      "#ED2929":
        "invert(27%) sepia(91%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)", // Red
      "#22C55E":
        "invert(68%) sepia(95%) saturate(427%) hue-rotate(88deg) brightness(118%) contrast(85%)", // Green
      "#3B82F6":
        "invert(48%) sepia(99%) saturate(2476%) hue-rotate(202deg) brightness(98%) contrast(96%)", // Blue
      "#F97316":
        "invert(60%) sepia(98%) saturate(2476%) hue-rotate(1deg) brightness(102%) contrast(96%)", // Orange
    };

    return colorFilters[hex] || "brightness(0) saturate(100%) invert(1)";
  };

  useEffect(() => {
    const currentPathName = location.pathname;
    if (currentPathName === "/") setActiveTab("home");
    else if (currentPathName.startsWith("/about")) setActiveTab("about");
    else if (currentPathName.startsWith("/service")) setActiveTab("service");
    else if (currentPathName.startsWith("/projects")) setActiveTab("projects");
    else if (currentPathName.startsWith("/contact")) setActiveTab("contact");
    else if (currentPathName.startsWith("/articles")) setActiveTab("articles");
  }, [location.pathname]);

  const handleNavigation = (tab: string, route: string) => {
    setActiveTab(tab);
    navigate(route);
  };

  const navItems = [
    {
      id: "home",
      icon: Homeicon,
      activeIcon: HomeiconActive,
      label: "Home",
      route: "/",
    },
    {
      id: "about",
      icon: Abouticon,
      activeIcon: AboutActive,
      label: "About",
      route: "/about",
    },
    {
      id: "service",
      icon: Serviceicon,
      activeIcon: ServiceActive,
      label: "Service",
      route: "/service",
    },
    {
      id: "projects",
      icon: Projecticon,
      activeIcon: ProjectActive,
      label: "Projects",
      route: "/projects",
    },
    {
      id: "contact",
      icon: Contacticon,
      activeIcon: ContactActive,
      label: "Contact",
      route: "/contact",
    },
  ];

  return (
    <motion.div
      className="bg-[#020202] h-[100vh] px-7 py-3 hidden md:flex md:flex-col gap-[5rem] w-[15vw] border-r border-gray-800"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Dashboard Icon */}
      <motion.div
        onClick={() => handleNavigation("dashboard", "/")}
        className="cursor-pointer selection:bg-[#ED2929]"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={Dashicon}
          className="h-20 w-20"
          style={{
            filter: getColorFilter(themeColor),
          }}
          alt="Dashboard"
        />
      </motion.div>

      {/* Navigation Items */}
      <div className="flex flex-col gap-4">
        {navItems.map((item, index) => {
          const isActive = activeTab === item.id;
          return (
            <motion.div
              key={item.id}
              className="relative flex flex-row items-center gap-4 cursor-pointer selection:bg-white px-2 py-2 group"
              onClick={() => handleNavigation(item.id, item.route)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    className="absolute left-0 w-1 h-8 rounded-r-full"
                    style={{ backgroundColor: themeColor }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
              <motion.img
                src={isActive ? item.activeIcon : item.icon}
                className="h-5 w-5 z-10 transition-all duration-300"
                alt={item.label}
                style={{
                  filter: isActive
                    ? getColorFilter(themeColor)
                    : "brightness(0) invert(1) opacity(0.7)",
                }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className={`font-poppins text-sm font-medium transition-colors duration-300 z-10 ${
                  isActive ? "font-semibold" : "text-white"
                }`}
                style={isActive ? { color: themeColor } : { color: "white" }}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.span>
              {isActive && (
                <motion.div
                  className="absolute left-0 right-0 h-full rounded-lg"
                  style={{ backgroundColor: themeColor, opacity: 0.1 }}
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default DashLeft;
