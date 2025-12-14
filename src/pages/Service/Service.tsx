import React from "react";
import { motion } from "framer-motion";
import DashMain from "../../components/Dashboard/DashMain";
import ThemeControls from "../../components/Theme/ThemeControls";
import { useThemeColors } from "../../hooks/useThemeColors";
import menu from "../../assets/Dashboard/menu.svg";
import ServiceWrapper from "../../components/Service/ServiceWrapper";
import services from "../../Data/ServiceData";
import services2 from "../../Data/ServiceData2";

const Service: React.FC = () => {
  const { themeColor } = useThemeColors();

  return (
    <div className="relative overflow-hidden">
      <DashMain>
        <div className="py-16 pl-10 relative">
          <motion.div
            className="absolute top-9 left-10 cursor-pointer md:hidden z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={menu} alt="menu" />
          </motion.div>
          <ThemeControls />

          <motion.div
            className="flex flex-col gap-2 py-4 md:py-0"
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
              Services
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

          <div className="flex flex-col py-8 gap-12 pr-10">
            <ServiceWrapper services={services} />
            <ServiceWrapper services={services2} />
          </div>
        </div>
      </DashMain>
    </div>
  );
};

export default Service;
