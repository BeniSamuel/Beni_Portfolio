import React, { useState } from "react";
import { motion } from "framer-motion";
import DashMain from "../../components/Dashboard/DashMain";
import ThemeControls from "../../components/Theme/ThemeControls";
import { useThemeColors } from "../../hooks/useThemeColors";
import menu from "../../assets/Dashboard/menu.svg";
import ContactMain from "../../components/Contact/ContactMain";
import { useNavigate, useLocation } from "react-router-dom";
import MobileNav from "../../components/Dashboard/MobileNav";

import Homeicon from "../../assets/Dashboard/HomeIcon.svg";
import HomeiconActive from "../../assets/Dashboard/HomeINotActive.svg";
import Abouticon from "../../assets/Dashboard/AboutIcon.svg";
import AboutActive from "../../assets/Dashboard/AboutActive.svg";
import Serviceicon from "../../assets/Dashboard/ServiceIcon.svg";
import ServiceActive from "../../assets/Dashboard/ServiceActive.svg";
import Projecticon from "../../assets/Dashboard/ProjectsIcon.svg";
import ProjectActive from "../../assets/Dashboard/ProjectsActive.svg";
import Contacticon from "../../assets/Dashboard/ContactIcon.svg";
import ContactActive from "../../assets/Dashboard/ContactActive.svg";

const Contact: React.FC = () => {
  const { themeColor } = useThemeColors();
  const navigate = useNavigate();
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");

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

  React.useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveTab("home");
    else if (path.startsWith("/about")) setActiveTab("about");
    else if (path.startsWith("/service")) setActiveTab("service");
    else if (path.startsWith("/projects")) setActiveTab("projects");
    else if (path.startsWith("/contact")) setActiveTab("contact");
  }, [location.pathname]);

  const handleNavigation = (tab: string, route: string) => {
    setActiveTab(tab);
    navigate(route);
  };

  const getColorFilter = (hex: string): string => {
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

  return (
    <div className="relative overflow-hidden">
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        activeTab={activeTab}
        onNavigate={handleNavigation}
        themeColor={themeColor}
        getColorFilter={getColorFilter}
      />
      <DashMain>
        <div className="py-16 pl-10 relative">
          <motion.div
            onClick={() => setIsMobileMenuOpen(true)}
            className="absolute top-9 left-10 cursor-pointer md:hidden z-20 flex flex-col items-center justify-center
                       bg-gradient-to-br from-[#171717] to-[#1a1a1a] border-[#2F2C2C] border-2 p-2 rounded-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={menu}
              alt="menu"
              style={{ filter: getColorFilter(themeColor) }}
            />
          </motion.div>
          <ThemeControls />

          <motion.div
            className="flex flex-col gap-2 py-12 md:py-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="font-poppins text-2xl md:text-3xl text-white font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Contact
            </motion.p>
            <div className="flex flex-col gap-1">
              <motion.div
                className="w-16 h-1 rounded-lg"
                style={{ backgroundColor: themeColor }}
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              />
              <motion.div
                className="w-10 h-1 rounded-lg"
                style={{ backgroundColor: themeColor }}
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <ContactMain />
          </motion.div>
        </div>
      </DashMain>
    </div>
  );
};

export default Contact;
