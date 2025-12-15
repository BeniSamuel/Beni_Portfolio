import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import DashMain from "../../components/Dashboard/DashMain";
import ThemeControls from "../../components/Theme/ThemeControls";
import { useThemeColors } from "../../hooks/useThemeColors";
import menu from "../../assets/Dashboard/menu.svg";
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

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
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
              className="font-poppins text-2xl md:text-3xl text-white font-semibold selection:bg-[#ED2929]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              About Me
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
            ref={ref}
            className="py-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p
              className="font-poppins text-white text-lg md:text-xl mb-8"
              variants={itemVariants}
            >
              I am{" "}
              <motion.span
                className="font-semibold selection:bg-white relative inline-block"
                style={{ color: themeColor }}
                whileHover={{ scale: 1.05 }}
              >
                Beni Samuel
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5"
                  style={{ backgroundColor: themeColor }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                />
              </motion.span>{" "}
              <span
                className="font-semibold selection:bg-white"
                style={{ color: themeColor }}
              >
                Designer & Developer
              </span>
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-4xl pr-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.p
                className="font-poppins text-white text-sm md:text-base leading-9 selection:bg-[#ED2929]"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                I am a passionate young software engineer driven by the mission
                to craft innovative solutions that address real-world
                challenges, simplifying lives and transforming everyday
                experiences.
              </motion.p>

              <motion.p
                className="font-poppins text-white text-sm md:text-base leading-9 selection:bg-[#ED2929]"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                My journey began at Utunyenyeri in Kigarama, where I laid the
                foundation for my academic growth, and continued at Groupe
                Scolaire Officiel de Butare in Huye District, where I honed my
                discipline and problem-solving skills. Currently, I am pursuing
                my studies at Rwanda Coding Academy, immersing myself in
                advanced technologies like networking, databases, DSA in C++,
                and embedded systems.
              </motion.p>

              <motion.p
                className="font-poppins text-white text-sm md:text-base leading-9 selection:bg-[#ED2929]"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                With an eye for detail and a flair for creativity, I combine
                code with vibrant designs, weaving a blend of functionality and
                aesthetic appeal to create software that is not only effective
                but also visually engaging. Whether it&apos;s developing a music
                video platform like B4MUSIC, an e-commerce app like Beshopy, or
                a community-centric solution like CacheNet, I approach every
                project with innovation and dedication, striving to make a
                meaningful impact.
              </motion.p>

              <motion.p
                className="font-poppins text-white text-sm md:text-base leading-9 selection:bg-[#ED2929]"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Through my work, I aim to inspire, create, and contribute to a
                world where technology makes life smarter, easier, and more
                beautiful.
              </motion.p>
            </motion.div>

            {/* Skills/Highlights Section */}
            <motion.div
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {[
                { title: "Education", desc: "Rwanda Coding Academy" },
                { title: "Focus", desc: "Full-Stack Development" },
                { title: "Passion", desc: "Innovation & Design" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-gradient-to-br from-[#171717] to-[#1a1a1a] rounded-xl border-[#2F2C2C] border-2"
                  whileHover={{ scale: 1.05 }}
                  style={
                    { "--hover-border": themeColor } as React.CSSProperties
                  }
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = themeColor)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "rgb(55, 65, 81)")
                  }
                  transition={{ duration: 0.3 }}
                >
                  <h4
                    className="font-semibold mb-2"
                    style={{ color: themeColor }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </DashMain>
    </div>
  );
};

export default About;
